// ==========================================================
// Minbar Assistant — Supabase Client
// এই ফাইলটা প্রতিটি পেজে লোড হবে, একবারই কানেকশন তৈরি হবে
// ==========================================================

const SUPABASE_URL = "https://ulqdrekjmwpfkwvrqzoc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscWRyZWtqbXdwZmt3dnJxem9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1OTM0NzMsImV4cCI6MjEwNDE2OTQ3M30.1rTs5NoVO4BFqobuDxn9Kmu7Zo14v00QFL5fO3khvu0";

// window.supabase আসে CDN থেকে লোড হওয়া @supabase/supabase-js লাইব্রেরি থেকে
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// ---------- অ্যাপ লক (PIN/প্যাটার্ন/বায়োমেট্রিক) হেল্পার ----------
async function sha256Hex(text) {
  const enc = new TextEncoder().encode(text);
  const hashBuf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(hashBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function isAppLockEnabled() {
  return localStorage.getItem("minbar_lock_enabled") === "1";
}
function isSessionUnlocked() {
  return sessionStorage.getItem("minbar_unlocked") === "1";
}
function markSessionUnlocked() {
  sessionStorage.setItem("minbar_unlocked", "1");
}
function hasBiometricEnrolled() {
  return !!localStorage.getItem("minbar_biometric_credential_id");
}

// বায়োমেট্রিক (ফিঙ্গারপ্রিন্ট/ফেস) এনরোল করা — ফোনের নিজস্ব লক স্ক্রিন ব্যবহার করে
async function enrollBiometric() {
  if (!window.PublicKeyCredential) return { status: "unsupported" };
  try {
    const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    if (!available) return { status: "unsupported" };

    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const userId = crypto.getRandomValues(new Uint8Array(16));
    const cred = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp: { name: "Minbar Assistant" },
        user: { id: userId, name: "minbar-user", displayName: "Minbar Assistant User" },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }],
        authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
        timeout: 60000,
      },
    });
    if (!cred) return { status: "error" };
    const credId = btoa(String.fromCharCode(...new Uint8Array(cred.rawId)));
    localStorage.setItem("minbar_biometric_credential_id", credId);
    return { status: "ok" };
  } catch (e) {
    return { status: "error", message: (e && e.message) || "সমস্যা হয়েছে" };
  }
}

// বায়োমেট্রিক দিয়ে আনলক যাচাই — ফোনের নিজস্ব বায়োমেট্রিক প্রম্পট দেখাবে
async function verifyBiometric() {
  if (!window.PublicKeyCredential) return false;
  try {
    const credId = localStorage.getItem("minbar_biometric_credential_id");
    if (!credId) return false;
    const rawId = Uint8Array.from(atob(credId), (c) => c.charCodeAt(0));
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge,
        allowCredentials: [{ id: rawId, type: "public-key" }],
        userVerification: "required",
        timeout: 60000,
      },
    });
    return !!assertion;
  } catch (e) {
    return false;
  }
}

// ছোট হেল্পার: বর্তমান লগইন করা ইউজার পাওয়া (না থাকলে null)
async function getCurrentUser() {
  const { data, error } = await db.auth.getUser();
  if (error) return null;
  return data.user;
}

// ছোট হেল্পার: লগআউট করে লগইন পেজে পাঠানো
async function signOutAndRedirect() {
  await db.auth.signOut();
  window.location.href = resolvePath("pages/login.html");
}

// প্রতিষ্ঠানের ধরন অনুযায়ী আইকন ও লেবেল
const INSTITUTION_TYPE_META = {
  personal: { icon: "👤", label: "ব্যক্তিগত" },
  mosque: { icon: "🕌", label: "মসজিদ" },
  madrasa: { icon: "📖", label: "মাদ্রাসা" },
  hostel: { icon: "🏨", label: "হোস্টেল" },
  business: { icon: "🏪", label: "ব্যবসা/দোকান" },
};

const INSTITUTION_STORAGE_KEY = "minbar_selected_institution_id";
function getSelectedInstitutionId() {
  return localStorage.getItem(INSTITUTION_STORAGE_KEY);
}
function setSelectedInstitutionId(id) {
  localStorage.setItem(INSTITUTION_STORAGE_KEY, id);
}

// ইউজারের সব প্রতিষ্ঠান আনা
async function getAllInstitutions() {
  try {
    const { data, error } = await db
      .from("institutions")
      .select("id, name, type")
      .order("created_at", { ascending: true });
    if (error) return { status: "error", message: error.message };
    return { status: "ok", institutions: data || [] };
  } catch (e) {
    return { status: "error", message: (e && e.message) || "নেটওয়ার্ক সমস্যা" };
  }
}

// বর্তমানে "নির্বাচিত" প্রতিষ্ঠান বের করা — লোকাল স্টোরেজে সেভ করা পছন্দ মনে রাখে,
// না থাকলে বা অবৈধ হলে প্রথম প্রতিষ্ঠানে ফিরে যায়।
// রিটার্ন করে: {status:"ok", id, institution, all} | {status:"empty"} | {status:"error", message}
async function getCurrentInstitution() {
  const result = await getAllInstitutions();
  if (result.status === "error") return result;
  if (result.institutions.length === 0) return { status: "empty" };

  const storedId = getSelectedInstitutionId();
  const match = result.institutions.find((i) => i.id === storedId);
  const chosen = match || result.institutions[0];
  if (!match) setSelectedInstitutionId(chosen.id);

  return { status: "ok", id: chosen.id, institution: chosen, all: result.institutions };
}

// পুরনো নামেও ব্যবহারযোগ্য রাখা হলো (শুধু আইডি লাগলে)
async function getCurrentInstitutionId() {
  const result = await getCurrentInstitution();
  return result.status === "ok" ? result.id : null;
}

// প্রতিটি পেজে একই রকম "সমস্যা হয়েছে, আবার চেষ্টা করুন" স্ক্রিন দেখানোর হেল্পার
function showConnectionError(message) {
  document.body.innerHTML =
    '<div style="min-height:100dvh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; padding:24px; text-align:center; font-family: \'Hind Siliguri\', sans-serif; background:#FAF6EF; color:#20241F;">' +
    '<div style="font-size:40px;">⚠️</div>' +
    '<p style="max-width:320px;">' + (message || "সংযোগ সমস্যা হয়েছে, ইন্টারনেট চেক করুন।") + '</p>' +
    '<button onclick="window.location.reload()" style="padding:12px 28px; border-radius:999px; border:none; background:#C9982E; color:#123832; font-weight:700; font-size:15px;">আবার চেষ্টা করুন</button>' +
    '</div>';
}

// নেটিভ confirm()-এর বদলে অ্যাপের নিজস্ব ডিজাইনের কনফার্মেশন বক্স
function showAppConfirm(message, icon) {
  const existing = document.getElementById("appModalOverlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "app-modal-overlay";
  overlay.id = "appModalOverlay";
  overlay.innerHTML =
    '<div class="app-modal-box">' +
    '<div class="app-modal-icon">' + (icon || "❓") + '</div>' +
    '<p>' + message + '</p>' +
    '<div style="display:flex; gap:10px; justify-content:center;">' +
    '<button id="appModalCancelBtn" style="background:var(--surface-sunken); color:var(--ink-muted);">না</button>' +
    '<button id="appModalYesBtn">হ্যাঁ</button>' +
    '</div></div>';
  document.body.appendChild(overlay);

  return new Promise((resolve) => {
    document.getElementById("appModalYesBtn").addEventListener("click", () => {
      overlay.remove();
      resolve(true);
    });
    document.getElementById("appModalCancelBtn").addEventListener("click", () => {
      overlay.remove();
      resolve(false);
    });
  });
}

// নেটিভ prompt()-এর বদলে অ্যাপের নিজস্ব ডিজাইনের ইনপুট বক্স
function showAppPrompt(message, icon, placeholder) {
  const existing = document.getElementById("appModalOverlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "app-modal-overlay";
  overlay.id = "appModalOverlay";
  overlay.innerHTML =
    '<div class="app-modal-box">' +
    '<div class="app-modal-icon">' + (icon || "✏️") + '</div>' +
    '<p style="margin-bottom:10px;">' + message + '</p>' +
    '<input type="text" id="appModalInput" placeholder="' + (placeholder || "") + '" style="width:100%; padding:11px 14px; border:1.5px solid var(--border-strong); border-radius:var(--radius-sm); font-family:var(--font-body); font-size:15px; margin-bottom:16px; background:var(--surface); color:var(--ink); box-sizing:border-box;" />' +
    '<div style="display:flex; gap:10px; justify-content:center;">' +
    '<button id="appModalCancelBtn2" style="background:var(--surface-sunken); color:var(--ink-muted);">বাতিল</button>' +
    '<button id="appModalOkBtn2">ঠিক আছে</button>' +
    '</div></div>';
  document.body.appendChild(overlay);

  const input = document.getElementById("appModalInput");
  setTimeout(() => input.focus(), 50);

  return new Promise((resolve) => {
    function submit() {
      const val = input.value.trim();
      overlay.remove();
      resolve(val || null);
    }
    document.getElementById("appModalOkBtn2").addEventListener("click", submit);
    document.getElementById("appModalCancelBtn2").addEventListener("click", () => {
      overlay.remove();
      resolve(null);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
    });
  });
}

function showAppAlert(message, icon) {
  const existing = document.getElementById("appModalOverlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "app-modal-overlay";
  overlay.id = "appModalOverlay";
  overlay.innerHTML =
    '<div class="app-modal-box">' +
    '<div class="app-modal-icon">' + (icon || "ℹ️") + '</div>' +
    '<p>' + message + '</p>' +
    '<button id="appModalOkBtn">ঠিক আছে</button>' +
    '</div>';
  document.body.appendChild(overlay);

  return new Promise((resolve) => {
    document.getElementById("appModalOkBtn").addEventListener("click", () => {
      overlay.remove();
      resolve();
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
        resolve();
      }
    });
  });
}

// অ্যাপ যেখান থেকেই চালু হোক (রুট বা /pages/ ফোল্ডার থেকে), path ঠিক রাখার হেল্পার
function resolvePath(path) {
  const inPagesFolder = window.location.pathname.includes("/pages/");
  if (inPagesFolder && !path.startsWith("pages/")) return path;
  if (inPagesFolder && path.startsWith("pages/")) return path.replace("pages/", "");
  return path;
}

// সার্ভিস ওয়ার্কার রেজিস্টার — সব পেজেই একবার চেষ্টা করবে
if ("serviceWorker" in navigator) {
  const swPath = window.location.pathname.includes("/pages/") ? "../sw.js" : "sw.js";
  navigator.serviceWorker.register(swPath).catch(() => {
    /* অফলাইন সাপোর্ট ছাড়াও অ্যাপ স্বাভাবিকভাবে কাজ করবে */
  });
}

// ---------- পুশ নোটিফিকেশন (দাওয়াতের রিমাইন্ডার) ----------
const VAPID_PUBLIC_KEY = "BGyQJ-HQ5ovkYJk7Z1dN6NG2Z_IslK90NWeWdJvF-WR-jrJm88YYnlOINlZAs9psAgSIDHJiUYXJkiub-3H5mgo";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

// নোটিফিকেশন চালু আছে কিনা চেক করা
async function isPushSubscribed() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) return false;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    return !!sub;
  } catch (e) {
    return false;
  }
}

// নোটিফিকেশন চালু করা — পারমিশন চাইবে, সাবস্ক্রাইব করে ডেটাবেজে সেভ করবে
async function subscribeToPushNotifications() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    return { status: "unsupported" };
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return { status: "denied" };

    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });
    }
    const user = await getCurrentUser();
    if (!user) return { status: "error", message: "লগইন করা নেই" };

    const subJson = sub.toJSON();
    const { error } = await db.from("push_subscriptions").upsert(
      {
        user_id: user.id,
        endpoint: subJson.endpoint,
        p256dh: subJson.keys.p256dh,
        auth: subJson.keys.auth,
      },
      { onConflict: "endpoint" }
    );
    if (error) return { status: "error", message: error.message };
    return { status: "ok" };
  } catch (e) {
    return { status: "error", message: (e && e.message) || "সমস্যা হয়েছে" };
  }
}

// নোটিফিকেশন বন্ধ করা
async function unsubscribeFromPushNotifications() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await db.from("push_subscriptions").delete().eq("endpoint", sub.endpoint);
      await sub.unsubscribe();
    }
  } catch (e) {}
}

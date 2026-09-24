// ==========================================================
// Minbar Assistant — Service Worker
// স্ট্যাটিক ফাইল + HTML পেজ + জরুরি CDN ডিপেন্ডেন্সি — নেটওয়ার্ক আগে (সবসময় সর্বশেষ ভার্সন),
// নেট না থাকলে ক্যাশ থেকে (অফলাইন মোড কাজ করার জন্য)।
// ==========================================================

const CACHE_NAME = "minbar-assistant-v29";
const PRECACHE_URLS = [
  "/manifest.json",
  "/css/styles.css",
  "/js/supabase-client.js",
  "/js/i18n.js",
  "/js/hijri.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/pages/dashboard.html",
  "/pages/bayan-list.html",
  "/pages/bayan-form.html",
  "/pages/dawat-list.html",
  "/pages/dawat-form.html",
  "/pages/customers-list.html",
  "/pages/customer-form.html",
  "/pages/finance-list.html",
  "/pages/finance-form.html",
  "/pages/settings.html",
];

// এই হোস্টগুলো থেকে আসা জরুরি স্ক্রিপ্ট/ফন্ট (Supabase JS, xlsx, Google Fonts) — শুধু এগুলোকে
// cross-origin হওয়া সত্ত্বেও ক্যাশ করা হয়, যাতে প্রথমবার অফলাইনে খুললেও অ্যাপ ভেঙে না যায়।
// Supabase-এর নিজের API/storage/auth কল (ulqdrekjmwpfkwvrqzoc.supabase.co) ইচ্ছাকৃতভাবে বাদ —
// সেগুলো সবসময় লাইভ ডেটা হওয়া উচিত, কখনো ক্যাশ থেকে না।
const CACHEABLE_CDN_HOSTS = ["cdn.jsdelivr.net", "cdnjs.cloudflare.com", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isCacheableCdn = CACHEABLE_CDN_HOSTS.includes(url.hostname) && event.request.method === "GET";

  if (!isSameOrigin && !isCacheableCdn) return; // Supabase API/storage/অন্য কোনো CDN কল ইন্টারসেপ্ট করব না

  // HTML পেজ — নেটওয়ার্ক আগে (সবসময় সর্বশেষ কনটেন্ট), ব্যর্থ হলে (অফলাইন) ক্যাশ থেকে
  const isHtml = event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
  if (isHtml) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/pages/dashboard.html")))
    );
    return;
  }

  // স্ট্যাটিক অ্যাসেট + জরুরি CDN — নেটওয়ার্ক আগে, ব্যর্থ হলে ক্যাশ থেকে (অফলাইন সাপোর্ট)
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// ---------- পুশ নোটিফিকেশন ----------
self.addEventListener("push", (event) => {
  let data = { title: "Minbar Assistant", body: "নতুন নোটিফিকেশন", url: "/pages/dashboard.html" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      data: { url: data.url },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/pages/dashboard.html";
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(url) && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

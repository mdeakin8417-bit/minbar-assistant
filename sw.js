// ==========================================================
// Minbar Assistant — Service Worker
// শুধু স্ট্যাটিক ফাইল (css/js/icons) ক্যাশ করে — HTML পেজ সবসময়
// নেটওয়ার্ক থেকে সরাসরি লোড হয়, যাতে পুরনো/স্টেল পেজ কখনো না দেখায়।
// ==========================================================

const CACHE_NAME = "minbar-assistant-v22";
const PRECACHE_URLS = [
  "/manifest.json",
  "/css/styles.css",
  "/js/supabase-client.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
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
  if (url.origin !== self.location.origin) return; // Supabase/CDN কল ইন্টারসেপ্ট করব না

  // HTML পেজ — কখনো ক্যাশ থেকে না, সবসময় নেটওয়ার্ক থেকে সরাসরি (স্টেল কনটেন্ট এড়াতে)
  const isHtml = event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
  if (isHtml) {
    event.respondWith(fetch(event.request, { cache: "no-store" }));
    return;
  }

  // স্ট্যাটিক অ্যাসেট — নেটওয়ার্ক আগে, ব্যর্থ হলে ক্যাশ থেকে (অফলাইন সাপোর্ট)
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

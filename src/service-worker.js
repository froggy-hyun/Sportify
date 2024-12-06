/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * 캐싱을 완전히 비활성화한 서비스 워커
 */
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
  self.skipWaiting(); // 즉시 활성화
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName); // 기존 캐시 삭제
        })
      );
    })
  );
  self.clientsClaim(); // 현재 활성화된 클라이언트 제어
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith('/swagger-ui')) {
    console.log('Skipping service worker for:', event.request.url);
    return; // 서비스 워커가 요청을 처리하지 않음
  }

  // 기본 네트워크 요청 처리
  console.log('Fetch event:', event.request.url);
  event.respondWith(fetch(event.request));
});

// navigator.serviceWorker.getRegistrations().then((registrations) => {
//   registrations.forEach((registration) => registration.unregister());
// });

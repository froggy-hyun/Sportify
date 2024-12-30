/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * 캐싱을 완전히 비활성화한 서비스 워커
 */

self.__WB_MANIFEST; // Workbox가 프리캐시 매니페스트를 주입하는 위치
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 즉시 활성화
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName); // 기존 캐시 삭제
        })
      );
    })
  );
  // self.clientsClaim(); // 현재 활성화된 클라이언트 제어
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith('/swagger-ui')) {
    return; // 서비스 워커가 요청을 처리하지 않음
  }

  // `/`로 시작하는 요청을 처리
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // 캐싱된 index.html 반환
        }
        return fetch(event.request).catch(() => {
          // 네트워크 요청 실패 시 index.html 반환
          return caches.match('/index.html');
        });
      })
    );
    return;
  }

  // 기본 네트워크 요청 처리
  event.respondWith(fetch(event.request));
});

// navigator.serviceWorker.getRegistrations().then((registrations) => {
//   registrations.forEach((registration) => registration.unregister());
// });

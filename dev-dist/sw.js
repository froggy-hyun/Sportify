/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (

      new Promise(resolve => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      })

      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: {
        uri
      },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}

define(['./workbox-54d0af47'], (function (workbox) {
  'use strict';

  self.skipWaiting(); // 설치되자마자 활성화
  workbox.clientsClaim(); // 활성화 후 즉시 컨트롤

  // 정적 자원 Precaching
  // workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // 특정 API 경로를 캐싱하지 않도록 설정
  const nonCacheableUrls = [
    '/api/swagger-ui/index.html',
    '/ticketItem',
  ];

  nonCacheableUrls.forEach((url) => {
    workbox.routing.registerRoute(
      new RegExp(url),
      new workbox.strategies.NetworkOnly() // 네트워크 우선 처리
    );
  });

  // 이전 캐시 제거
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['new-cache-name']; // 유지할 캐시 이름
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName); // 기존 캐시 삭제
            }
          })
        );
      })
    );
  });
}));
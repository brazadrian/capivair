var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './css/style.css',
        './css/bootstrap.min.css',
        './js/main.js',
        './dados.json',
        './scss/bootstrap/scss/vendor/_rfs.scss',

        //'a.html',


           
        './img/40.png',
        './img/50.png',
        './img/icons/16.png',
        './img/icons/20.png',
        './img/icons/29.png',
        './img/icons/32.png',
        './img/icons/40.png',
        './img/icons/48.png',
        './img/icons/50.png',
        './img/icons/55.png',
        './img/icons/57.png',
        './img/icons/58.png',
        './img/icons/60.png',
        './img/icons/64.png',
        './img/icons/66.png',
        './img/icons/72.png',
        './img/icons/76.png',
        './img/icons/80.png',
        './img/icons/87.png',
        './img/icons/88.png',
        './img/icons/92.png',
        './img/icons/100.png',
        './img/icons/102.png',
        './img/icons/114.png',
        './img/icons/128.png',
        './img/icons/144.png',
        './img/icons/152.png',
        './img/icons/167.png',
        './img/icons/172.png',
        './img/icons/180.png',
        './img/icons/196.png',
        './img/icons/216.png',
        './img/icons/256.png',
        './img/icons/512.png',
        './img/icons/1024.png',
        './img/icons/android48x48.png',
        './img/icons/android72x72.png',
        './img/icons/android96x96.png',
        './img/icons/android144x144.png',
        './img/icons/android192x192.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
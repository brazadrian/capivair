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


        './img/40.png',
        './img/50.png',
        './img/lixeira.png',
        './img/AppIcons/16.png',
        './img/AppIcons/20.png',
        './img/AppIcons/29.png',
        './img/AppIcons/32.png',
        './img/AppIcons/40.png',
        './img/AppIcons/48.png',
        './img/AppIcons/50.png',
        './img/AppIcons/55.png',
        './img/AppIcons/57.png',
        './img/AppIcons/58.png',
        './img/AppIcons/60.png',
        './img/AppIcons/64.png',
        './img/AppIcons/66.png',
        './img/AppIcons/72.png',
        './img/AppIcons/76.png',
        './img/AppIcons/80.png',
        './img/AppIcons/87.png',
        './img/AppIcons/88.png',
        './img/AppIcons/92.png',
        './img/AppIcons/100.png',
        './img/AppIcons/102.png',
        './img/AppIcons/114.png',
        './img/AppIcons/128.png',
        './img/AppIcons/144.png',
        './img/AppIcons/152.png',
        './img/AppIcons/167.png',
        './img/AppIcons/172.png',
        './img/AppIcons/180.png',
        /* './img/AppIcons/ic_launcher.png', */
        './img/AppIcons/196.png',
        './img/AppIcons/216.png',
        './img/AppIcons/256.png',
        './img/AppIcons/512.png',
        './img/AppIcons/1024.png',
        './img/logo.png'
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
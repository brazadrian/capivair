var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './chart.html',
        './monitoramento.html',
        './js/main.js',
        './dados.json',
        
        './css/style.css',
        './css/bootstrap.min.css',
        './scss/bootstrap/scss/vendor/_rfs.scss',
        './lib/all.min.css',
        './lib/bootstrap-icons.css',
        'js/bootstrap.bundle.min.js',
        'js/jquery-3.4.1.min.js',


        './img/Mapa-Loc/Map-Planta-0.75x.png',
        './img/Mapa-Loc/pin-loc-blue.png',
        './img/Mapa-Loc/pin-loc-yellow.png',
        './img/Mapa-Loc/pin-loc-orange.png',
        './img/Mapa-Loc/pin-loc-red.png',

           
        './img/40.png',
        './img/50.png',
        './img/lixeira.png',
        './img/AppIcons/Icon/16.png',
        './img/AppIcons/Icon/20.png',
        './img/AppIcons/Icon/29.png',
        './img/AppIcons/Icon/32.png',
        './img/AppIcons/Icon/40.png',
        './img/AppIcons/Icon/48.png',
        './img/AppIcons/Icon/50.png',
        './img/AppIcons/Icon/55.png',
        './img/AppIcons/Icon/57.png',
        './img/AppIcons/Icon/58.png',
        './img/AppIcons/Icon/60.png',
        './img/AppIcons/Icon/64.png',
        './img/AppIcons/Icon/66.png',
        './img/AppIcons/Icon/72.png',
        './img/AppIcons/Icon/76.png',
        './img/AppIcons/Icon/80.png',
        './img/AppIcons/Icon/87.png',
        './img/AppIcons/Icon/88.png',
        './img/AppIcons/Icon/92.png',
        './img/AppIcons/Icon/100.png',
        './img/AppIcons/Icon/102.png',
        './img/AppIcons/Icon/114.png',
        './img/AppIcons/Icon/128.png',
        './img/AppIcons/Icon/144.png',
        './img/AppIcons/Icon/152.png',
        './img/AppIcons/Icon/167.png',
        './img/AppIcons/Icon/172.png',
        './img/AppIcons/Icon/180.png',
        './img/AppIcons/Icon/ic_launcher.png',
        './img/AppIcons/Icon/196.png',
        './img/AppIcons/Icon/216.png',
        './img/AppIcons/Icon/256.png',
        './img/AppIcons/Icon/512.png',
        './img/AppIcons/Icon/1024.png',
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
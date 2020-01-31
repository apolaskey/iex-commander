importScripts('workbox-sw.prod.js');

(function() {

    let workbox = this['workbox'];

    // Optimizations to allow a faster hook-up of the serviceworker
    workbox.skipWaiting();
    workbox.clientsClaim();

    // Webpack Assets first
    let precacheRoutes = self.__precacheManifest;

    // Any other pre-cached routes we want for custom media etc.
    let otherRoutes = [

    ];

    // Bind pre-cache routes to workbox -> serviceworker
    workbox.precaching.precacheAndRoute(precacheRoutes.concat(otherRoutes));

})();
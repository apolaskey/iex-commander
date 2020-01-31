IEX Commander
----
Simple app to experiment with the IEX Developer Platform (https://iextrading.com/developer/) and Angular 5.x

Installation
----
`Yarn` https://yarnpkg.com/en/docs/install

Execute `yarn install`

Execute `yarn run start` or `yarn run start --host 192.168.0.x` if exposing to other devices on network

To build app for deployment run `yarn run build` app will be at `./output/*`

Nice and easy :)

Notable Dependencies
----
* Angular 5
    * Application General Purpose Framework
* Workbox
    * Serviceworker helper w/Webpack support
* localForage & ngForage
    * Storage API for LocalStorage and WebSQL
* Bulma CSS
    * UI framework

Gotchas
----
Angular templates need to be loaded with CommonJS `require` es6 `import` statements don't seem to resolve html very well

Yarn doesn't play nice with Firebase and indicates unmet peer-dependencies, [known issue.](https://github.com/firebase/firebase-js-sdk/issues/1413)
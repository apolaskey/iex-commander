import {Inject} from "@angular/core";
import {LOGGER_TOKEN} from "../injectables/LoggerInjector";

/**
 * Monitor for our service worker; binds to common events
 */
export class ServiceWorkerMonitor {

    constructor(@Inject(LOGGER_TOKEN) _console: any) {
        _console.log('Registering Service Worker Monitor...');
        self.addEventListener('install', (event: any) => {
            _console.log('Worker install: \r\n', event);
        });

        self.addEventListener('activate', (event: any) => {
            _console.log('Worker activate: \r\n', event);
        });

        self.addEventListener('error', (event) => {
            _console.log('Worker error: \r\n', event);
        });

        self.addEventListener('statechange', (event: any) => {
            _console.log('Worker statechange: \r\n', event);
        });

        self.addEventListener('message', (event) => {
            _console.log('Worker message: \r\n', event);
        });
    }

    /**
     * Send a message to the registered service worker
     * @param message
     */
    public static sendMessage(message: ServiceWorkerCommand) {
        navigator.serviceWorker.controller.postMessage(message);
    }

}
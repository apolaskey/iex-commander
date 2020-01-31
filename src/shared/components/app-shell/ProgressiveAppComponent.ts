import {Component, Inject, Input, OnInit} from "@angular/core";
import * as firebase from "firebase";
import {LOGGER_TOKEN} from "../../injectables/LoggerInjector";
import {WINDOW_TOKEN} from "../../injectables/WindowInjector";
import {SharedConstants} from "../../SharedConstants";

@Component({
    selector: "progressive-app",
    template: require("./views/ProgressiveAppView"),
})
export class ProgressiveAppComponent implements OnInit {

    private _window : Window;
    private _console : any;

    constructor(@Inject(WINDOW_TOKEN) _window: Window, @Inject(LOGGER_TOKEN) _console: any) {
        this._window = _window;
        this._console = _console;
    }

    public ngOnInit() {
        this._initServiceWorkers();
        this._initFirebase();
    }

    protected _initServiceWorkers() {
        navigator.serviceWorker.register("/service-worker.js").then((registration) => {
            this._console.log("Worker Registered: \r\n", registration);
        }).catch((registrationError) => {
            this._console.log("Worker failed: \r\n", registrationError);
        });
    }

    protected _initFirebase() {
        firebase.initializeApp(SharedConstants.FIREBASE_CONFIG);
    }

}

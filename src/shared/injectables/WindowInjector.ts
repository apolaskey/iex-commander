import { isPlatformBrowser } from "@angular/common";
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from "@angular/core";

export const WINDOW_TOKEN = new InjectionToken("WindowToken");

export abstract class WindowRef {

    get nativeWindow(): Window | object {
        throw new Error("No window object provided on current platform.");
    }

}

// tslint:disable:max-classes-per-file
export class BrowserWindowRef extends WindowRef {

    constructor() {
        super();
    }

    get nativeWindow(): Window | object {
        return window;
    }

}

export function windowFactory(browserWindowRef: BrowserWindowRef, platformId: object): Window | object {
    if (isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return {}; // <-- Do logic to get nodejs equiv
}

// -- Prepares Providers to be used by Angular's injection interface

const browserWindowProvider: ClassProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
};

const windowProvider: FactoryProvider = {
    deps: [ WindowRef, PLATFORM_ID ],
    provide: WINDOW_TOKEN,
    useFactory: windowFactory,
};

export const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider,
];
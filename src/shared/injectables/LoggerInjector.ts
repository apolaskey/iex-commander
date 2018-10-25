import { isPlatformBrowser } from "@angular/common";
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from "@angular/core";

export const LOGGER_TOKEN = new InjectionToken("WindowToken");

export abstract class LoggerRef {

    get nativeLogger(): Console | object {
        throw new Error("No window object provided on current platform.");
    }

}

// tslint:disable:max-classes-per-file
export class BrowserLoggerRef extends LoggerRef {

    constructor() {
        super();
    }

    get nativeLogger(): Console | object {
        return window.console;
    }

}

export function loggerFactory(browserLoggerRef: BrowserLoggerRef, platformId: object): Console | object {
    if (isPlatformBrowser(platformId)) {
        return browserLoggerRef.nativeLogger;
    }
    return {}; // <-- Do logic to get nodejs compatible logger
}

// -- Prepares Providers to be used by Angular's injection interface

const browserLoggerProvider: ClassProvider = {
    provide: LoggerRef,
    useClass: BrowserLoggerRef,
};

const loggerProvider: FactoryProvider = {
    deps: [ LoggerRef, PLATFORM_ID ],
    provide: LOGGER_TOKEN,
    useFactory: loggerFactory,
};

export const LOGGER_PROVIDERS = [
    browserLoggerProvider,
    loggerProvider,
];
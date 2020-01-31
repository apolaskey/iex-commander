import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import {HMR_TOKEN, HMRInjector} from "../injectables/HMRInjector";
import {LOGGER_PROVIDERS} from "../injectables/LoggerInjector";
import {WINDOW_PROVIDERS} from "../injectables/WindowInjector";

/**
 * Root IOC container for IEX modules
 */
@NgModule({
    providers: [
        WINDOW_PROVIDERS,
        LOGGER_PROVIDERS,
        {provide: HMR_TOKEN, useClass: HMRInjector},
    ],
})
export class IEXCommons {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: IEXCommons,
            providers: [],
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: IEXCommons) {
        if (parentModule) {
            throw new Error(
                "IEXCommons has already been loaded! Please load directly to an app module otherwise.",
            );
        }
    }

}

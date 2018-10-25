import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import {WINDOW_PROVIDERS} from "../injectables/WindowInjector";
import {LOGGER_PROVIDERS} from "../injectables/LoggerInjector";

@NgModule({
    providers: [
        WINDOW_PROVIDERS,
        LOGGER_PROVIDERS,
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

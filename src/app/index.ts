import {NgModuleRef} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {IEXAppModule} from "./modules/IEXAppModule";
import {AppConstants} from "../shared/constants";
// import { enableProdMode } from '@angular/core';

platformBrowserDynamic().bootstrapModule(IEXAppModule).then((ref: NgModuleRef<IEXAppModule>) => {
    if(window[AppConstants.NG_REF]) {
        window[AppConstants.NG_REF].destroy();
    }
    window[AppConstants.NG_REF] = ref;
}).catch(error => {
    window["console"].log("Error during bootstrapping:\r\n", error);
});

import {NgModuleRef} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HMR_TOKEN} from "../shared/injectables/HMRInjector";
import {IEXAppModule} from "./modules/IEXAppModule";
// import { enableProdMode } from '@angular/core';

platformBrowserDynamic().bootstrapModule(IEXAppModule).then((ref: NgModuleRef<IEXAppModule>) => {
    ref.injector.get(HMR_TOKEN).performHotModuleReplacement(ref);
}).catch((error) => {
    this["console"].log("Error during bootstrapping:\r\n", error);
});

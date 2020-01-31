import {Inject, Injectable, InjectionToken, NgModuleRef} from "@angular/core";
import {SharedConstants} from "../SharedConstants";
import {WINDOW_TOKEN} from "./WindowInjector";

/**
 * Injectable to allow for easy HMR of the angular application
 */
@Injectable()
export class HMRInjector {

    private _window: Window;

    constructor(@Inject(WINDOW_TOKEN) _window: Window) {
        this._window = _window;
    }

    public performHotModuleReplacement(ref: NgModuleRef<any>) {
        if (this._window[SharedConstants.NG_REF]) {
            this._window[SharedConstants.NG_REF].destroy();
        }
        this._window[SharedConstants.NG_REF] = ref;
        this._window["console"].log("HMR for Angular Application enabled!");
    }
}

export const HMR_TOKEN = new InjectionToken<HMRInjector>("hmr.token");

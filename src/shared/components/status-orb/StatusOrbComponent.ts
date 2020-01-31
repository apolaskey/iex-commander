import {Component, Inject, OnInit} from "@angular/core";
import {LOGGER_TOKEN} from "../../injectables/LoggerInjector";
import {WINDOW_TOKEN} from "../../injectables/WindowInjector";

@Component({
    selector: "status-orb",
    template: require("./views/StatusOrbView"),
})
export class StatusOrbComponent implements OnInit {

    protected status: string;

    private _window : Window;
    private _console : any;

    constructor(@Inject(WINDOW_TOKEN) _window: Window, @Inject(LOGGER_TOKEN) _console: any) {
        this._window = _window;
        this._console = _console;
    }

    public ngOnInit() {
        this._console.log("Status Orb!");
    }

    public setStatus(status: any) {
        this.status = status;
    }

}
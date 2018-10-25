import {Component, Inject, Input, OnInit} from "@angular/core";
import {WINDOW_TOKEN} from "../injectables/WindowInjector";
import {LOGGER_TOKEN} from "../injectables/LoggerInjector";

@Component({
    selector: "iex-app",
    template: "<h1>Test test 123</h1>",
})
export class ProgressiveShellComponent implements OnInit {

    constructor(@Inject(WINDOW_TOKEN) _window: Window, @Inject(LOGGER_TOKEN) _console: any) {
        _console.log("IEX Shell loading...");
    }

    public ngOnInit() {

    }

}

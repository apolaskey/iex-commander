import {Input, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProgressiveShellComponent} from "../../shared/components/ProgressiveShellComponent"
import {IEXCommons} from "../../shared/services/IEXCommons";

@NgModule({
    bootstrap: [ProgressiveShellComponent],
    declarations: [ProgressiveShellComponent],
    imports: [
        BrowserModule,
        IEXCommons.forRoot()
    ],
})
export class IEXAppModule {
    @Input() public window: Window;
}

import {Input, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgxEchartsModule} from "ngx-echarts";
import {ProgressiveAppComponent} from "../../shared/components/app-shell/ProgressiveAppComponent";
import {ShellBodyComponent} from "../../shared/components/app-shell/ShellBodyComponent";
import {ShellFooterComponent} from "../../shared/components/app-shell/ShellFooterComponent";
import {ShellHeaderComponent} from "../../shared/components/app-shell/ShellHeaderComponent";
import {StatusOrbComponent} from "../../shared/components/status-orb/StatusOrbComponent";
import {IEXCommons} from "../../shared/services/IEXCommons";
import {IEXDataLayerModule} from "./IEXDataLayerModule";

@NgModule({
    bootstrap: [ProgressiveAppComponent],
    declarations: [
        // Internal Declarations
        ProgressiveAppComponent,
        ShellHeaderComponent,
        ShellBodyComponent,
        ShellFooterComponent,
        StatusOrbComponent,
    ],
    imports: [
        BrowserModule,
        NgxEchartsModule,
        IEXDataLayerModule,
        IEXCommons.forRoot(),
    ],
})
export class IEXAppModule {
    @Input() public window: Window;
}

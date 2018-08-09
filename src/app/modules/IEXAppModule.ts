import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {GreetingComponent} from "../../shared/components/GreetingComponent"

@NgModule({
    imports: [BrowserModule],
    bootstrap: [GreetingComponent],
    declarations: [GreetingComponent]
})
export class IEXAppModule {

}

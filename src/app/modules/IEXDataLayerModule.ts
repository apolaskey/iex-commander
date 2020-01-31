import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {Inject, NgModule} from "@angular/core";
import {LOGGER_TOKEN} from "../../shared/injectables/LoggerInjector";
import {WINDOW_TOKEN} from "../../shared/injectables/WindowInjector";
import {StockChartDuration} from "../types/service/StockChartDuration";


/**
 * IEXDataLayerComponent : All-in-one web-component for retrieving data to drive various UI components
 */
@NgModule({
    imports: [
        HttpClientModule,
    ],
})
export class IEXDataLayerModule {

    private _window : Window;
    private _console : any;
    private _http : HttpClient;

    private _iex_host : string = "https://cloud.iexapis.com";
    private _iex_api : string = "/beta";
    private _iex_pub_key : string = "pk_91fddf6baf95427aa3193e09be127418";

    constructor(
        @Inject(WINDOW_TOKEN) _window: Window,
        @Inject(LOGGER_TOKEN) _console: any,
        _http: HttpClient,
    ) {
        this._window = _window;
        this._console = _console;
        this._http = _http;

        this._console.log("Initializing IEX Data layer");
    }

    public callInvestorExchange(endpoint: string) : any;
    public callInvestorExchange(endpoint : string, params = new HttpParams()) : any {
        params.append('token', this._iex_pub_key);
        return this._http.get(
            `https://${this._iex_host}${this._iex_api}${endpoint}`,
            {params: params}
        );
    }

    /**
     * Retrieves a status from IEX about the availability of their systems; can still fail if the watchman is asleep
     */
    public getHealth () : object {
        return this.callInvestorExchange("/status")
    }

    /**
     * Returns a list of symbols to be pulled
     * @param full Uses the non-free endpoint returning non-IEX symbols
     */
    public getStockSymbols(full : boolean) : object {
        if (full) {
            return this.callInvestorExchange("/ref-data/symbols");
        } else {
            return this.callInvestorExchange("/ref-data/iex/symbols");
        }
    }

    /**
     * Returns stock details for booking
     * @param symbol
     */
    public getStockDetails(symbol: string) : object {
        return this.callInvestorExchange(`/stock/${symbol}/book`);
    }

    /**
     * Returns financial sector performance; 1.0 == 100% so 0.0138% == 1.38% up
     */
    public getSectorPerformance() : object {
        return this.callInvestorExchange("/stock/market/sector-performance");
    }

    /**
     * Returns chart data for a given symbol and duration
     * @param symbol
     * @param timespan
     */
    public getStockChart(symbol: string, timespan: StockChartDuration) : object {
        return this.callInvestorExchange(`/stock/${symbol}/chart/${timespan.valueOf()}`);
    }

    /**
     * Returns earnings details for a given symbol
     * @param symbol
     */
    public getStockEarnings(symbol: string) : object {
        return this.callInvestorExchange(`/stock/${symbol}/earnings`);
    }

    public getStockAnnualReport(symbol: string) : object {
        return this.callInvestorExchange(`/stock/${symbol}/financials?period=annual`);
    }

    public getStockLogo(symbol: string) : object {
        return this.callInvestorExchange(`/stock/${symbol}/logo`);
    }

    public getStockNews(symbol: string, count: number) : object {
        return this.callInvestorExchange(`/stock/${symbol}/news/last/${Math.ceil(count)}`);
    }
}

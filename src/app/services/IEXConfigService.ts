import {Injectable} from "@angular/core";

@Injectable()
export class IEXConfigService {

    private static configLocation:
        string = "https://gist.githubusercontent.com/apolaskey/ff5eb6627027db3c965d6fbcc1cc97bf/raw";

    public getFirebaseConfig() {
        return {
            apiKey: "AIzaSyCnvtgjNfyhNi9fooKft1f85J7-I3zxcws",
            authDomain: "iex-commander.firebaseapp.com",
            databaseURL: "https://iex-commander.firebaseio.com",
            projectId: "iex-commander",
            storageBucket: "iex-commander.appspot.com",
            messagingSenderId: "930442385049",
        };
    }

}

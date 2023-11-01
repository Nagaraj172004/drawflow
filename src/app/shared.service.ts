import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class SharedService {
    constructor(public http: HttpClient) { }

    private data = new BehaviorSubject<string>("");
    private user = new BehaviorSubject<string>("Select User");

    castData = this.data.asObservable();
    passSelectedCast = this.user.asObservable();

    changeState(passsearchkey: any) {
        this.data.next(passsearchkey);
    }

    passtoSearch(passsearchkey: any) {
        this.user.next(passsearchkey);
    }

    getAllData() {
        return this.http.get(
            "https://cors-anywhere.herokuapp.com/" + "https://www.google.co.in/"
        );
        // .map(data => data.json())
        // .pipe(take(1))
        // .do(data => console.log(data));
    }
}

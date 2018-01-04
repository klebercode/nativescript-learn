import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Deal } from "./deal";

import { GOEAT_API } from "../app.api";

@Injectable()
export class DealService {

  private serverAPI = "http://127.0.0.1:8000/api/restaurants"

  constructor(private http: Http){}

  getDeals(): Observable<Deal[]> {
    // return this.http.get(`${ GOEAT_API }/deals/`)
    return this.http.get(`${this.serverAPI}/`)
      .map(response => response.json());
  }

  getDeal(pk: number): Observable<Deal> {
    return this.http.get(`${this.serverAPI}/${pk}/`)
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}

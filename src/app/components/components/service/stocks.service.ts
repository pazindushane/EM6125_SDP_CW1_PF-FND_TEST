import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllStations(): Observable<any> {
    return this.http.get(this.Url+'/fuelstation/getAllFuelStationDetails', {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }
}

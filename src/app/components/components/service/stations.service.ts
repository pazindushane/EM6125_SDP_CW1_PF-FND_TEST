import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllStaion(): Observable<any> {
    return this.http.get(this.Url+'/fuelstation/getAllFuelStationDetails', {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }
}

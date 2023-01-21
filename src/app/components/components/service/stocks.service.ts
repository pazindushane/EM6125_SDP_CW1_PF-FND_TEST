import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie";
import {MainFuelStockDTO} from "../dto/MainFuelStockDTO";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllStations(): Observable<any> {
    return this.http.get(this.Url+'/mainstock/getMainStockDetails', {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }

  saveStocks(mainFuelStockDTO: MainFuelStockDTO): Observable<any> {
    return this.http.post<any>(this.Url+'/mainstock/addStock', {
      mfs_id: mainFuelStockDTO.mfs_id,
      status: mainFuelStockDTO.status,
      available_limit: mainFuelStockDTO.available_limit,
      requested_limit: mainFuelStockDTO.requested_limit,
      main_stock: mainFuelStockDTO.main_stock
    }, {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    })
  }
}

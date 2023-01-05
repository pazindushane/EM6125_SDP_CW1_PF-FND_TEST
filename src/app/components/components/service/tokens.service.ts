import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllTokens(): Observable<any> {
    return this.http.get(this.Url+'/fueltoken/getAllTokens',{

      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }


  changeToken(status:any, tid:any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("tid",tid);
    queryParams = queryParams.append("status",status);
    return this.http.put(this.Url+'/fueltoken/changeTokenStatus',{},{
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      }),
      params:queryParams,
    });
  }

  changePayment(status:any, pid:any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pid",pid);
    queryParams = queryParams.append("status",status);
    return this.http.put(this.Url+'/payment/changePaymentStatus',{},{
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      }),
      params:queryParams,
    });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient,  private cookieService: CookieService) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.Url+'/user/getAllUsers', {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }
}

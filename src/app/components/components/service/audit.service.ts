import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllAudits(): Observable<any> {
    return this.http.get(this.Url+'/audit/getAllAudits', {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(<string>this.cookieService.get('token'))
      })
    });
  }
}

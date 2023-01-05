import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url = environment.baseUrl;

  constructor(private http: HttpClient,private cookieService: CookieService, private router: Router,) { }

  getLoggedIn(username: any, password: any) {
    let authorizationData = 'Basic '+btoa(username + ':' + password);
    // console.log(username + ':' + password)
    return this.http.post(this.Url+'/auth/authenticate', { username, password },{
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData
      })
    });
  }


  verifyLogin():boolean{
    return this.cookieService.hasKey('User');
  }
}

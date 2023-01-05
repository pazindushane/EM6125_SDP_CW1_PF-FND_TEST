import { Component } from '@angular/core';
import {LoginService} from "./core/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EM6125_SDP_CW1-FND_PF_TEST';

  constructor(private authenticationService:LoginService,
              private router:Router) {
    if (this.authenticationService.verifyLogin()) {
      this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/login']);
    }
  }
}

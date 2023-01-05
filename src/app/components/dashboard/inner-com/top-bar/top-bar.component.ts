import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthServiceService} from "../../../services/auth-service.service";
import {CookieService} from "ngx-cookie";
import {NavigationEnd, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public isMenuOpen = true;
  @Output() event = new EventEmitter<boolean>();
  user: string | undefined;
  constructor(private authService:AuthServiceService, private cookieService: CookieService,
              private router: Router) { }

  ngOnInit(): void {
    // this.user=this.authService.getCurrentUser?.username;
  }

  sendNavState(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.event.emit(this.isMenuOpen);
  }

  locatione(){
    //
    window.location.reload()
  }

  logout() {
    this.cookieService.removeAll();
    console.log("this.cookieService.remove('User');")
    // this.router.navigate(['/homePage']);
    window.location.reload()
    this.router.navigate(['./login']);
    console.log("this.router.navigate(['./login']);")

    this.router.events.pipe(
      first(evt => evt instanceof NavigationEnd)

    ).subscribe(() => {
      window.location.reload()
      this.locatione()
      console.log("this.locatione()")
      // this.scroll.scrollToPosition([0,0]);
    });
  }

}

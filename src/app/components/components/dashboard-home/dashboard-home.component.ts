import { Component, OnInit } from '@angular/core';
import { faHandshake, faHeadset, faTractor, faBuildingWheat,faBasketShopping,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {timeout} from "rxjs";
import {SystemConfig} from "../../../core/util/SystemConfig";
import {TokensService} from "../service/tokens.service";
import {CustomerService} from "../service/customer.service";
import {StationsService} from "../service/stations.service";
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  faBasketShopping = faBasketShopping;
  faBuildingWheat= faBuildingWheat;
  faHandshake=faHandshake;
  faHeadset=faHeadset;
  faCheckCircle=faCheckCircle;
  faTractor=faTractor;
  TokenCount=0
  CustomerCount=0
  StationCount=0

  constructor(private tokenService: TokensService,
              private customerService: CustomerService,private stationService: StationsService) { }

  ngOnInit(): void {
    this.tokensCount();
    this.customersCount();
    this.stationsCount();
  }

  public tokensCount(): void {
    this.tokenService.getAllTokens()
      .pipe(timeout(SystemConfig.getDebounceTime()))
      .subscribe(result => {
        this.TokenCount = result.data.length;
      }, error => {
        console.log(error);
      });
  }

  public customersCount(): void {
    this.customerService.getAllUsers()
      .pipe(timeout(SystemConfig.getDebounceTime()))
      .subscribe(result => {
        this.CustomerCount = result.data.length;
      }, error => {
        console.log(error);
      });
  }

  public stationsCount(): void {
    this.stationService.getAllStaion()
      .pipe(timeout(SystemConfig.getDebounceTime()))
      .subscribe(result => {
        this.StationCount = result.data.length;
      }, error => {
        console.log(error);
      });
  }

}

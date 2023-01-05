import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navSate = true;
  constructor() { }

  ngOnInit(): void {
  }

  receiveNavState($event: boolean): void{
    this.navSate = $event;
  }

}

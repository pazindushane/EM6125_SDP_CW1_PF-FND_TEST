import {Component, Input, OnInit} from '@angular/core';
import {NavDTO} from "./NavDTO";
import {NavData} from "../../../../../assets/Nav";

@Component({
  selector: 'app-left-side-nav-bar',
  templateUrl: './left-side-nav-bar.component.html',
  styleUrls: ['./left-side-nav-bar.component.scss']
})
export class LeftSideNavBarComponent implements OnInit {

  @Input() navState = true;
  currentMenus: NavDTO [] = NavData;

  constructor() {

  }

  ngOnInit(): void {
  }

}

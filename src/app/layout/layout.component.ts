import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    new WOW().init();
  }


}

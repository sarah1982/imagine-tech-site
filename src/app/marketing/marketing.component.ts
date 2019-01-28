import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    new WOW().init();
  }

}

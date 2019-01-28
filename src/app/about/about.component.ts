import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    new WOW().init();
  }


}

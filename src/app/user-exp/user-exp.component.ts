import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-user-exp',
  templateUrl: './user-exp.component.html',
  styleUrls: ['./user-exp.component.css']
})
export class UserExpComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    new WOW().init();
  }

}

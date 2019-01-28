import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements AfterViewInit  {

  constructor() { }
  ngAfterViewInit() {
    new WOW().init();
  }


}

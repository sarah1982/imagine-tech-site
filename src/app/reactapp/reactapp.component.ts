import { Component, OnInit, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-reactapp',
  templateUrl: './reactapp.component.html',
  styleUrls: ['./reactapp.component.css']
})
export class ReactappComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    new WOW().init();
  }

}

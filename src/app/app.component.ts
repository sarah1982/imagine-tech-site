import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'Imagine';

  ngAfterViewInit() {
    new WOW().init();
  }
}

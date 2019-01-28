import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements AfterViewInit {
  color = 'one';
  counter = 0;
  elt: Element;
  Name;
  txtDescription = null;
  imgSource;
  constructor() { }
  ngAfterViewInit() {
    new WOW().init();
  }
  getDataForModal(pos: string) {
      const imgElt = document.getElementById(pos);
      this.imgSource = imgElt.getAttribute('src');
      this.Name = document.getElementById(pos).nextSibling.nextSibling.textContent;
      this.txtDescription = document.getElementById(pos).nextSibling.nextSibling.nextSibling.textContent;
      console.log(this.txtDescription);
  }
  }



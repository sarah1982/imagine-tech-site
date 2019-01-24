import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  {
  color = 'one';
  counter = 0;
  elt: Element;
  elts;
  imgSrc;
  constructor() { }
  openModal(eventId) {
    console.log(document.getElementById(eventId).innerHTML);
  }
  }



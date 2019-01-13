import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  color = 'one';
  counter = 0;
  elt: Element;
  elts;
  constructor() { }

  ngOnInit() {

     }
  }



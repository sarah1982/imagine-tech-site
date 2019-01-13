import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.css']
})
export class MainfooterComponent implements OnInit {
   @Input() isOn: boolean;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,  AfterContentChecked } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,  AfterContentChecked {
isOn: boolean;
url: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }


ngAfterContentChecked() {
    this.url = this.router.url;
    this.url === '/' ? this.isOn = false : this.isOn = true;
}




}

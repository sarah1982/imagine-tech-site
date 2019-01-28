import { Component, AfterViewInit } from '@angular/core';
import {WOW} from 'wowjs';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
 img;
 modalImg;
captionText;
 modal;
 span;
  constructor() { }
  ngAfterViewInit() {
    new WOW().init();
  }
  getImg(strId) {
    this.modal = document.getElementById('img-modal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    this.img = document.getElementById(strId);
    this.modalImg = document.getElementById('img01');
    this.modal.style.display = 'block';
    this.modalImg.src = this.img.src;
  }
  closeImg() {
    this.modal = document.getElementById('img-modal');
    this.modal.style.display = 'none';
  }
}

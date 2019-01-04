import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
 img;
 modalImg;
captionText;
 modal;
 span;
  constructor() { }

  ngOnInit() {

  }
  ngOnViewInit() {



  }
  getImg(strId) {
    this.modal = document.getElementById('myModal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    this.img = document.getElementById(strId);
    this.modalImg = document.getElementById('img01');
    this.modal.style.display = 'block';
    this.modalImg.src = this.img.src;
    this.captionText.innerHTML = this.img.alt;
  }
  closeImg() {
    this.modal = document.getElementById('myModal');
    this.modal.style.display = 'none';
  }
}

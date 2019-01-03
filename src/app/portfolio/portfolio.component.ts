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
  constructor() { }

  ngOnInit() {

  }
  ngOnViewInit() {
     this.modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
 this.img = document.getElementById('myImg');
 this.modalImg = document.getElementById('img01');
 this.captionText = document.getElementById('caption');
  }
  getImg() {
    this.modal.style.display = 'block';
    this.modalImg.src = this.img.src;
    this.captionText.innerHTML = this.img.alt;
  }
  closeImg() {
    this.modal.style.display = 'none';
  }
}

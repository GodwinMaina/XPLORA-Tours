import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit {

  slides = [
    { image: 'https://cdn.pixabay.com/photo/2020/02/20/20/27/beach-4865786_640.jpg', text: 'Text for Image 1' },
    { image: 'https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.webp?b=1&s=612x612&w=0&k=20&c=j2utO1_ko8ihARb15fI1uU702zR4iCv0-5icwmth4ic=', text: 'Text for Image 2' },
    { image: 'https://media.istockphoto.com/id/1413299539/photo/male-tourist-looking-at-arrival-and-departure-board-at-kuala-lumpur-international-airport.webp?b=1&s=612x612&w=0&k=20&c=MVBXQ-v2u1Hchp69NsaB9jlUfhjGIGxNvyAutcMs460=', text: 'Text for Image 3' },
    { image: 'https://i0.wp.com/toonphotosafari.com/wp-content/uploads/2017/11/AMPL530-Lioness-with-cubs-avoiding-elephant.jpg?w=1500&ssl=1', text: 'Text for Image 4' }
  ];

  currentSlideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.showNextSlide();
    }, 5000);
  }

  showNextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

}

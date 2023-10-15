import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, startWith, Subject, switchMap, timer, } from 'rxjs';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageDialog } from '../gallery-grid/gallery-grid.component'

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.css']
})
export class GallerySliderComponent {

  constructor(public dialog: MatDialog) { }

  slides = [
    '../../../../assets/Rectangle.png',
    '../../../../assets/RectangleCopy2.png',
    '../../../../assets/RectangleCopy3.png',
    '../../../../assets/img_1.png',
    '../../../../assets/img_2.png',
    // Add more image URLs as needed
  ];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex]}')`;
  }

  getCurrentSlideName() {
    let splitter = this.getCurrentSlideUrl().split('/');
    return splitter[splitter.length - 1].slice(0, -2);
  }

  openDialog() {
    this.dialog.open(ImageDialog, {
      data: this.getCurrentSlideName(),
    });
  }

}

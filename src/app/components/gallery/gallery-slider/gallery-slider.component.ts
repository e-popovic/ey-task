import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.css']
})
export class GallerySliderComponent {

  imageUrls = [
    '../../../../assets/Rectangle.png',
    '../../../../assets/RectangleCopy2.png',
    '../../../../assets/RectangleCopy3.png',
    '../../../../assets/img_1.png',
    '../../../../assets/img_2.png',
    // Add more image URLs as needed
  ];
  currentIndex = 0;

}

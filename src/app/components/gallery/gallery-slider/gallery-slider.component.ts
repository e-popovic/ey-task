import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.css']
})
export class GallerySliderComponent {

  imageObject: Array<object> = [{
          image: '../../../../assets/Rectangle.png',
          thumbImage: '../../../../assets/Rectangle.png',
          alt: 'alt of image',
          title: 'title of image'
      }, {
          image: '.../../../../assets/RectangleCopy2.png', // Support base64 image
          thumbImage: '../../../../assets/RectangleCopy2.png', // Support base64 image
          title: 'Image title', //Optional: You can use this key if want to show image with title
          alt: 'Image alt', //Optional: You can use this key if want to show image with alt
          order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }, {
           image: '.../../../../assets/RectangleCopy3.png', // Support base64 image
           thumbImage: '../../../../assets/RectangleCopy3.png', // Support base64 image
           title: 'Image title', //Optional: You can use this key if want to show image with title
           alt: 'Image alt', //Optional: You can use this key if want to show image with alt
           order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
       }
  ];

  imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    // Add more image URLs as needed
  ];
  currentIndex = 0;

}

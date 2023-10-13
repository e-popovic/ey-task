import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent {

  imageUrls = [
      'img_1.png',
      'img_2.png',
      'img_3.png',
      'img_4.png',
      'img_5.png',
      'img_6.png',
      'img_7.png',
      'img_8.png'
    ];
}

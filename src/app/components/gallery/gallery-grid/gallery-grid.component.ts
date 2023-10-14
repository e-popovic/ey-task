import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent {

  constructor(public dialog: MatDialog) { }

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

  openDialog(imageUrl: string) {
    this.dialog.open(ImageDialog, {
      data: imageUrl,
    });
  }
}

@Component({
  selector: 'app-image-dialog',
  templateUrl: 'image-dialog.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class ImageDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: String) {}
}

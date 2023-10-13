import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-animal',
  templateUrl: './content-animal.component.html',
  styleUrls: ['./content-animal.component.css']
})
export class ContentAnimalComponent {

  @Input() reverseOrder = false
  @Input() title = ''
  @Input() imgSrc = ''
  @Input() passages = ['']

}

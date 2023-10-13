import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-links-group',
  templateUrl: './footer-links-group.component.html',
  styleUrls: ['./footer-links-group.component.css']
})
export class FooterLinksGroupComponent {

  @Input() title = 'a'
  @Input() footerLinks = ['']
}

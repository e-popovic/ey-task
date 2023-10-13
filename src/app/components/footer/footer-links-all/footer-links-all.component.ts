import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links-all',
  templateUrl: './footer-links-all.component.html',
  styleUrls: ['./footer-links-all.component.css']
})
export class FooterLinksAllComponent {

  linksInfo = [
    {
      title: "pet-facts.com",
      footerLinks: ['About us', 'Careers', 'FAQ']
    },
    {
      title: "our brands",
      footerLinks: ['Supercoat', 'Fancy Feast', 'Pro Plan', 'Beyond']
    },
    {
      title: "contact us",
      footerLinks: ['Contact us', 'Terms & Conditions', 'Privacy Policy']
    }
  ]

}

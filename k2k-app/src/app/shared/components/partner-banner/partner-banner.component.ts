import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-banner',
  standalone: true,
  templateUrl: './partner-banner.component.html',
  styleUrl: './partner-banner.component.scss'
})
export class PartnerBannerComponent {
  @Input() large = false;

  partners = [
    { name: 'Allianz', logo: 'partners/allianz.svg' },
    { name: 'Generali', logo: 'partners/generali.svg' },
    { name: 'Prima Assicurazioni', logo: 'partners/prima.jpg' },
    { name: 'Glassdrive', logo: 'partners/glassdrive.svg' }
  ];
}

import { Component } from '@angular/core';
import { PartnerBannerComponent } from '../../shared/components/partner-banner/partner-banner.component';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [PartnerBannerComponent],
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss'
})
export class ChiSiamoComponent {}

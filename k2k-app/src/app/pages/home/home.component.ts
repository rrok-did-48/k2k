import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerBannerComponent } from '../../shared/components/partner-banner/partner-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PartnerBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

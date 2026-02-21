import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerBannerComponent } from '../../shared/components/partner-banner/partner-banner.component';

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [RouterLink, PartnerBannerComponent],
  templateUrl: './servizi.component.html',
  styleUrl: './servizi.component.scss'
})
export class ServiziComponent {
  servizi = [
    {
      icon: 'fa-solid fa-spray-can-sparkles',
      title: 'Carrozzeria Professionale',
      description: 'Verniciatura a forno e riparazione danni da collisione con ricambi originali e tecnologie di ultima generazione.',
      sedi: 'Gambettola & Borello'
    },
    {
      icon: 'fa-solid fa-file-shield',
      title: 'Gestione Sinistri Completa',
      description: 'Pratiche dirette con le assicurazioni convenzionate (Allianz, Generali, Prima) senza anticipo di denaro.',
      sedi: 'Gambettola & Borello'
    },
    {
      icon: 'fa-solid fa-cloud-showers-heavy',
      title: 'Riparazione Danni da Grandine',
      description: 'Tecnica levabolli specializzata per rimuovere le ammaccature senza danneggiare la vernice originale.',
      sedi: 'Gambettola & Borello'
    },
    {
      icon: 'fa-solid fa-car',
      title: 'Auto di Cortesia',
      description: 'Mobilità garantita per tutta la durata dell\'intervento. Ti mettiamo a disposizione un\'auto sostitutiva gratuitamente.',
      sedi: 'Gambettola & Borello'
    },
    {
      icon: 'fa-solid fa-pump-soap',
      title: 'Lavaggio & Igienizzazione Omaggio',
      description: 'Lavaggio esterno e igienizzazione interni inclusi gratuitamente in ogni riparazione effettuata.',
      sedi: 'Gambettola & Borello'
    },
    {
      icon: 'fa-solid fa-car-burst',
      title: 'Centro Glassdrive',
      description: 'Sostituzione e riparazione vetri con tecnologie originali e ricalibrazione sistemi ADAS.',
      sedi: 'Solo Borello'
    }
  ];
}

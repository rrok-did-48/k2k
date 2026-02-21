import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-assicurazioni',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './assicurazioni.component.html',
  styleUrl: './assicurazioni.component.scss'
})
export class AssicurazioniComponent {
  vantaggi = [
    {
      icon: 'fa-solid fa-money-bill-wave',
      title: 'Risarcimento Diretto',
      description: 'Se hai ragione, non dovrai anticipare alcuna somma. Pagherà direttamente l\'assicurazione alla nostra struttura.'
    },
    {
      icon: 'fa-solid fa-file-circle-check',
      title: 'Burocrazia Zero',
      description: 'Ci occupiamo noi di aprire la pratica, contattare il perito e gestire tutta la documentazione necessaria.'
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Ricambi Originali e Garanzia',
      description: 'Utilizziamo esclusivamente ricambi originali e materiali di alta qualità per preservare il valore della tua auto.'
    },
    {
      icon: 'fa-solid fa-car-side',
      title: 'Auto di Cortesia',
      description: 'Mentre lavoriamo sulla tua vettura, ti mettiamo a disposizione un\'auto sostitutiva per la massima mobilità.'
    },
    {
      icon: 'fa-solid fa-car-burst',
      title: 'Cristalli (Sede Borello)',
      description: 'Con la polizza cristalli, la riparazione o sostituzione del parabrezza è rapida e spesso gratuita nella nostra sede Glassdrive.'
    }
  ];
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AppointmentForm {
  tipoCliente: string;
  nome: string;
  cellulare: string;
  sede: string;
  motivo: string;
  data: string;
  fasciaOraria: string;
  note: string;
}

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  form: AppointmentForm = {
    tipoCliente: '',
    nome: '',
    cellulare: '',
    sede: '',
    motivo: '',
    data: '',
    fasciaOraria: '',
    note: ''
  };

  submitted = false;

  onSubmit(): void {
    // Compose WhatsApp message with form data
    const msg = `Richiesta Appuntamento K2K SRL%0A` +
      `Tipo: ${this.form.tipoCliente}%0A` +
      `Nome: ${this.form.nome}%0A` +
      `Cell: ${this.form.cellulare}%0A` +
      `Sede: ${this.form.sede}%0A` +
      `Motivo: ${this.form.motivo}%0A` +
      `Data: ${this.form.data}%0A` +
      `Fascia: ${this.form.fasciaOraria}%0A` +
      `Note: ${this.form.note || 'Nessuna'}`;

    window.open(`https://wa.me/393277380403?text=${msg}`, '_blank');
    this.submitted = true;
  }

  resetForm(): void {
    this.form = {
      tipoCliente: '',
      nome: '',
      cellulare: '',
      sede: '',
      motivo: '',
      data: '',
      fasciaOraria: '',
      note: ''
    };
    this.submitted = false;
  }
}

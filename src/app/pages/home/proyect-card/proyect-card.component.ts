import { Component, input } from '@angular/core';

@Component({
  selector: 'app-proyect-card',
  imports: [ProyectCardComponent],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.scss'
})
export class ProyectCardComponent {

  title = input<string>();
  description = input<string>();
  imageUrl = input<string>();
  link = input<string>();

}

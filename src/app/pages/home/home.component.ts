import { Component } from '@angular/core';
import { ProyectCardComponent } from "./proyect-card/proyect-card.component";
import { ProfileSectionComponent } from "./profile-section/profile-section.component";

@Component({
  selector: 'app-home',
  imports: [ProyectCardComponent, ProfileSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

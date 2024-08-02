import { Component } from '@angular/core';
import { faKitchenSet, faRecycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ssz-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  loyalityServices = [
    {
      icon: faKitchenSet,
      title: "Capacitación manipulación de alimentos"
    },
    {
      icon: faRecycle,
      title: "Simulacro Inspección de sanidad"
    }
  ]
}

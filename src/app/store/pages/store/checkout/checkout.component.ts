import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'ssz-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];

  productos = [
    {
      name: 'MEZCLA SAL PAPRIKA 1 KG CUSTOM',
      quantity: 2,
      price: 10127
    },
    {
      name: 'JAMON BERNA CASERO 450GR',
      quantity: 10,
      price: 12952
    }
  ]

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

}

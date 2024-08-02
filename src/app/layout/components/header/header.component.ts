import { Component } from '@angular/core';
import { faBell, faHeadphones, faHeadphonesAlt, faHeadset, faPhoneVolume, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ssz-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  buttons = [
    {
      icon: faBell,
      label: ''
    },
    {
      icon: faPhoneVolume,
      label: 'ayuda'
    }
  ]


  accountButtonItems = [
    {
      label: 'Dashboard'
    },
    { separator: true },
    {
      label: 'Historial de pedidos'
    },
    {
      label: 'Más comprados'
    },
    {
      label: 'Devoluciones'
    },
    {
      label: 'Notas Crédito'
    },
    { separator: true },
    {
      label: 'Perfil de Usuario'
    },
    {
      label: 'Datos de la empresa'
    },
    {
      label: 'Direcciones'
    },
    {
      label: 'Privacidad'
    },
    { separator: true },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-sign-out'
    }
  ]


  ctaButtonIcon = faShoppingBasket
}

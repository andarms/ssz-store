import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { faStore, faReceipt, faHandshakeAngle, faDolly, IconDefinition, faShoppingBasket, faGrip, faRectangleList } from '@fortawesome/free-solid-svg-icons';

type DockButton = {
  label: string;
  icon: IconDefinition;
  active: boolean;
  link: string;
}

@Component({
  selector: 'ssz-mobile-dock',
  templateUrl: './mobile-dock.component.html',
  styleUrl: './mobile-dock.component.scss'
})
export class MobileDockComponent {
  router: Router = inject(Router);

  ctaButtonIcon = faShoppingBasket
  buttoms: DockButton[] = [
    {
      label: 'Tienda',
      icon: faStore,
      active: false,
      link: '/store/store'
    },
    {
      label: 'Portafolio',
      icon: faRectangleList,
      active: false,
      link: '/store/orders'
    },
    {
      label: 'Servicios',
      icon: faHandshakeAngle,
      active: true,
      link: '/store/services'
    }
  ]

}

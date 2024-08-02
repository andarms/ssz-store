import { Component } from '@angular/core';

@Component({
  selector: 'ssz-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  pedidos = [
    {
      id: 123,
      date: new Date('2020-06-15'),
      status: 'Entregado',
      total: 500_000
    },
    {
      id: 124,
      date: new Date('2020-07-10'),
      status: 'Pendiente',
      total: 250_000
    },
    {
      id: 125,
      date: new Date('2020-08-01'),
      status: 'Entregado',
      total: 750_000
    },
    {
      id: 126,
      date: new Date('2020-09-12'),
      status: 'Cancelado',
      total: 100_000
    },
    {
      id: 127,
      date: new Date('2020-10-05'),
      status: 'Entregado',
      total: 300_000
    },
    {
      id: 128,
      date: new Date('2020-11-20'),
      status: 'Pendiente',
      total: 450_000
    },
    {
      id: 129,
      date: new Date('2020-12-15'),
      status: 'Entregado',
      total: 600_000
    },
    {
      id: 130,
      date: new Date('2021-01-25'),
      status: 'Entregado',
      total: 800_000
    },
    {
      id: 131,
      date: new Date('2021-02-14'),
      status: 'Pendiente',
      total: 550_000
    },
    {
      id: 132,
      date: new Date('2021-03-30'),
      status: 'Cancelado',
      total: 200_000
    }
  ];

}

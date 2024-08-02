import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ssz-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class ServicesDetailsComponent implements OnInit {
  date = null

  checked = false

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
    ];

    this.home = { icon: 'fa fa-home', routerLink: '/' };
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesDetailsComponent } from './pages/services/details/details.component';
import { ProductDetailsComponent } from './pages/store/product-details/product-details.component';
import { CheckoutComponent } from './pages/store/checkout/checkout.component';
import { ProductCatalogComponent } from './pages/store/product-catalog/product-catalog.component';

const routes: Routes = [
  {
    component: StoreComponent,
    path: 'store/store'
  },
  {
    component: ProductDetailsComponent,
    path: 'store/product/details'
  },
  {
    component: ServicesComponent,
    path: 'store/services',
    pathMatch: 'full'
  },
  {
    component: CheckoutComponent,
    path: 'store/checkout',
    pathMatch: 'full'
  },
  {
    component: ProductCatalogComponent,
    path: 'store/catalog',
    pathMatch: 'full'
  },
  {
    component: ServicesDetailsComponent,
    path: 'store/services/details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

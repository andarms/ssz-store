import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './pages/store/store.component';
import { ServicesComponent } from './pages/services/services.component';
import { StoreRoutingModule } from './store-routing.module';
import { MobileDockComponent } from './components/mobile-dock/mobile-dock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesDetailsComponent } from './pages/services/details/details.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProductDetailsComponent } from './pages/store/product-details/product-details.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CheckoutComponent } from './pages/store/checkout/checkout.component';
import { ProductCatalogComponent } from './pages/store/product-catalog/product-catalog.component';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AutoComplete, AutoCompleteModule } from 'primeng/autocomplete';



@NgModule({
  declarations: [
    StoreComponent,
    ServicesComponent,
    MobileDockComponent,
    ServicesDetailsComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    StoreRoutingModule,
    CalendarModule,
    InputSwitchModule,
    InputNumberModule,
    ButtonModule,
    BreadcrumbModule,
    CarouselModule,
    TagModule,
    TreeModule,
    AccordionModule,
    SplitButtonModule,
    AutoCompleteModule
  ],
  exports: [
    MobileDockComponent
  ]
})
export class StoreModule { }

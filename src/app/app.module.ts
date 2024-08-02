import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './layout/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FooterComponent } from './layout/components/footer/footer.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    AdminModule,
    StoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FontAwesomeModule,
    SplitButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

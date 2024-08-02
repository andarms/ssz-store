import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';



@NgModule({
  declarations: [DashboardComponent, AdminLayoutComponent, OrderHistoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

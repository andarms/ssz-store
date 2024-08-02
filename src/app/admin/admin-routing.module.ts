import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        pathMatch: 'full',
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

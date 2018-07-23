import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFrameworkComponent } from './dashboard-framework.component';
import { DashboardFrameworkRoute } from './dashboard-framework.route';

@NgModule({
  imports: [
    CommonModule,
    DashboardFrameworkRoute
  ],
  declarations: [DashboardFrameworkComponent],
  bootstrap:[DashboardFrameworkComponent]
})
export class DashboardFrameworkModule { }

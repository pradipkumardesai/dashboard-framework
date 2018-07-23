import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutes } from './dashboard.route.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }

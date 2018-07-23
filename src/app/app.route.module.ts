import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components/errors/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "",pathMatch:"full", component:PageNotFoundComponent },
  { path:"dashboard",loadChildren:"app/fam/dashboard/dashboard.module#DashboardModule"},
  { path:"dashboard-framework",loadChildren:"app/public/dashboard-framework/dashboard-framework.module#DashboardFrameworkModule"}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule {}

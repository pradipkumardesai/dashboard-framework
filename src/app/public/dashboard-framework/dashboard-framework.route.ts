import { NgModule } from "../../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../../node_modules/@angular/router";
import { DashboardFrameworkComponent } from "./dashboard-framework.component";

export const routes:Routes=[
    { path:"",component:DashboardFrameworkComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class DashboardFrameworkRoute{

}
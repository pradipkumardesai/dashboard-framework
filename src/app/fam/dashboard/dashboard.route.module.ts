import { NgModule } from "../../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../../node_modules/@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const routes:Routes=[
    {path:"",component:DashboardComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class DashboardRoutes{

}
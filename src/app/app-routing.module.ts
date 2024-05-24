import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { EmployeeCreateComponent } from './Pages/employee-create/employee-create.component';
import { EmployeesPageComponent } from './Pages/employees-page/employees-page.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { CompanyCreateComponent } from './Pages/company-create/company-create.component';

const routes: Routes = [
  {path:"", component:HomePageComponent, title:"Home page"},
  //Employee Routes:
  {path:"employee/create", component:EmployeeCreateComponent},
  {path:"employees/page", component: EmployeesPageComponent},
  //Company Routes:
  {path:"company/create", component: CompanyCreateComponent},
  {path:"companies/page", component: CompaniesPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

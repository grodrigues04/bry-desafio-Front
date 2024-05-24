import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { EmployeeCreateComponent } from './Pages/employee-create/employee-create.component';
import { EmployeesPageComponent } from './Pages/employees-page/employees-page.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { CompanyCreateComponent } from './Pages/company-create/company-create.component';
import { EmployeeEditComponent } from './Pages/employee-edit/employee-edit.component';
import { CompanyEditComponent } from './Pages/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    EmployeeCreateComponent,
    EmployeesPageComponent,
    CompaniesPageComponent,
    CompanyCreateComponent,
    EmployeeEditComponent,
    CompanyEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

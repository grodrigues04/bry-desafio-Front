import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path:"", component:HomePageComponent, title:"Home page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent } from './components/login/login.component';
import  {EndoscopesComponent } from './components/endoscopes/endoscopes.component';
import  {LogbookComponent } from './components/logbook/logbook.component';
import  {DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'login-app',component:LoginComponent},
  {path:'',redirectTo:'login-app', pathMatch: 'full'},
  {path:'endoscopes-app',component:EndoscopesComponent},
  {path:'logbook-app',component:LogbookComponent},
  {path:'dashboard-app',component:DashboardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

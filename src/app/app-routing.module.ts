import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LogFormComponent } from './log-form/log-form.component';

const routes: Routes = [
  {path: 'register', component: RegFormComponent },
  {path: 'login', component: LogFormComponent },
  {path: 'home', component: DashboardComponent },
  {path: '', redirectTo : 'register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

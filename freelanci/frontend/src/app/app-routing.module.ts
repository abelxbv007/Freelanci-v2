import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FreelancerDashboardComponent } from './freelancer-dashboard/freelancer-dashboard.component';
import { ClientformComponent } from './inscription/clientform/clientform.component';
import { FreelancerformComponent } from './inscription/freelancerform/freelancerform.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AccountComponent } from './freelancer-dashboard/account/account.component';
import { MessagesComponent } from './messages/messages.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'freelancerdash',component:FreelancerDashboardComponent},
  {path:'inscription',component:InscriptionComponent,pathMatch:'full'},
  {path:'clientform',component:ClientformComponent},
  {path:'freelancerform',component:FreelancerformComponent}
  ,{path:'clientdash',component:ClientDashboardComponent}
  ,{path:'account',component:AccountComponent},{path:'messages',component:MessagesComponent},{path:'reports',component:ReportsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
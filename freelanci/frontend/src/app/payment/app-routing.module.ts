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
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'freelancerdash',component:FreelancerDashboardComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'clientform',component:ClientformComponent},
  {path:'freelancerform',component:FreelancerformComponent}
  ,{path:'clientdash',component:ClientDashboardComponent}
  ,{path:'account',component:AccountComponent},{
    path:'payment',component:PaymentComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from '../connexion/connexion.component';
import { ClientformComponent } from './clientform/clientform.component';
import { FreelancerformComponent } from './freelancerform/freelancerform.component';


const routes: Routes = [
  
  {path:'connexion',component:ConnexionComponent},
  
  {path:'clientform',component:ClientformComponent},
  {path:'freelancerform',component:FreelancerformComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Nav1Component } from './mainpage/nav1/nav1.component';

import { MainPageRoutingModule } from './mainpage/mainpage-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FreelancerDashboardComponent } from './freelancer-dashboard/freelancer-dashboard.component';
import { ClientformComponent } from './inscription/clientform/clientform.component';
import { FreelancerformComponent } from './inscription/freelancerform/freelancerform.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { OffreComponent } from './client-dashboard/offre/offre.component';
import { RightnavbarComponent } from './client-dashboard/rightnavbar/rightnavbar.component';
import { NavbarComponent } from './client-dashboard/navbar/navbar.component';
import { ContentComponent } from './client-dashboard/content/content.component';
import { Rightnavbar1Component } from './freelancer-dashboard/rightnavbar1/rightnavbar1.component';
import { ContentfreelancerComponent } from './freelancer-dashboard/contentfreelancer/contentfreelancer.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './freelancer-dashboard/nav/nav.component';
import { AccountComponent } from './freelancer-dashboard/account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Nav1Component,
    
    ConnexionComponent,
    InscriptionComponent,
    FreelancerDashboardComponent,
    ClientformComponent,
    FreelancerformComponent,
    ClientDashboardComponent,
    OffreComponent,
    RightnavbarComponent,
    NavbarComponent,
    ContentComponent,
    Rightnavbar1Component,
    ContentfreelancerComponent,
    NavComponent,
    AccountComponent,
    PaymentComponent,
    MessagesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,MainPageRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

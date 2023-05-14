import { Component } from '@angular/core';
import { ServicesclientService } from './servicesclient.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent {
  constructor(public v:ServicesclientService){}
 
  changevalue(){
    this.v.value=2;

  }
  change(){}

}

import { Component } from '@angular/core';
import { MyserveciesService } from '../myservecies.service';

@Component({
  selector: 'app-freelancer-dashboard',
  templateUrl: './freelancer-dashboard.component.html',
  styleUrls: ['./freelancer-dashboard.component.css']
})
export class FreelancerDashboardComponent {
 constructor(public service:MyserveciesService){

 }

}

import { Component } from '@angular/core';
import { ServicesclientService } from '../servicesclient.service';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  constructor(public v:ServicesclientService,private auth:MyserveciesService){}
  offer ={
    title:"",
    duration:"",
    author:"",
    description:"",
    date:"",
    budget:"",
  

}
 
changevalue(){
  this.v.value=1;
  this.addoffer();
}
addoffer(){
  this.auth.addNewOffer(this.offer).subscribe(()=>{})
}
}

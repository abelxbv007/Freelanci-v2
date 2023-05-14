import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-freelancerform',
  templateUrl: './freelancerform.component.html',
  styleUrls: ['./freelancerform.component.css']
})
export class FreelancerformComponent {
  constructor(private auth:MyserveciesService,private route:Router){

  }
  
  user ={
    name:"",
    familyname:"",
    email:"",
    password:"",
    usertype:"freealncer"
  }

  register(){
   
    
    this.auth.register1({"name":this.user.name,"familyname":this.user.familyname,"email":this.user.email,"password":this.user.password,"usertype":this.user.usertype}).subscribe(
      ()=>{
        this.route.navigate(['/connexion'])
      }
    )
    
  }
}

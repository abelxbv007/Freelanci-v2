import { Component } from '@angular/core';
import { Route, Router} from '@angular/router';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent {
  constructor( private auth:MyserveciesService, public route:Router){

  }
  user ={
    name:"",
    familyname:"",
    email:"",
    password:"",
    usertype:"client"
  }

  register(){
   
    
    this.auth.register1({"name":this.user.name,"familyname":this.user.familyname,"email":this.user.email,"password":this.user.password,"usertype":this.user.usertype}).subscribe(
      ()=>{
        this.route.navigate(['/connexion'])
      }
    )
    
  }
}

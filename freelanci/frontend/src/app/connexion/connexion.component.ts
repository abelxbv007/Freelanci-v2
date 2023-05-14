import { Component } from '@angular/core';
import { MyserveciesService } from '../myservecies.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  helper=new JwtHelperService;
  constructor(private auth:MyserveciesService,private route:Router){
   
    

  }
  user={
    email:"",
    password:""
  }
  myuser:any;
  token:any;
  incorrect=true;
  login(){
    
    
    this.auth.login({"email":this.user.email,"password":this.user.password}).subscribe
    (res=>{
      if(res != "user not found"){
        localStorage.setItem('token',res)
        
        let username=localStorage.getItem('token')
        this.token=this.helper.decodeToken(res)
        
        let routing=this.token.usertype;
        console.log(this.token)
        console.log(routing)
        localStorage.setItem('email',this.token.email)
        if(routing=='client'){
          this.route.navigate(['/clientdash'])

        }
        else{
          this.route.navigate(['/freelancerdash'])
        }
       /*this.token=res;
        localStorage.setItem('token',this.token.myToken);
        let data=this.auth.savedataprofile(this.token)
        console.log(data)*/
      }
      else{
        this.incorrect=false;
        console.log(this.incorrect)
      }
      
        
     
    })
    
  

}}

declare const window: Window;
import * as jwt from 'jsonwebtoken'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offers } from './freelancer-dashboard/contentfreelancer/offres';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class MyserveciesService {
helper=new JwtHelperService()
  constructor(private http: HttpClient) { }
 url="http://127.0.0.1:3000/user/";
 url1="http://127.0.0.1:3000/offer/";
 search="";
  register1(user: any){
   return this.http.post(this.url + 'register' , user);
  }
  login(user:any){
  
    return this.http.post(this.url + 'login' , user,  {responseType: 'text'});
    
  }
  isloggedIn(){
    let token=localStorage.getItem('token');
    if(token){
      return true;
    }
    else
    return false;
  }
  savedataprofile(token:any){
    let decodedtoken=this.helper.decodeToken(token)
    console.log(decodedtoken)
  }
  addNewOffer(offer: any){
    return this.http.post(this.url1 + 'add' , offer);
   }
   getoffers(){
    console.log(this.http.get(this.url1 + 'get'))
    return this.http.get(this.url1 + 'get');
   }
   getuser(email:any){
    return this.http.get(this.url +'getuser' + email )
   }
    declare wnd: Window;
   getdata(){
    let token =localStorage.getItem('token')
    console.log(token)
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      console.log(data)
      return data;
    }
   }

  
   
   

}

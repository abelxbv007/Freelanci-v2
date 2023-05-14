declare const window: Window;
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public auth:MyserveciesService,public route:Router){}
  islogged=this.auth.isloggedIn();

  gotoaccount(){
    console.log("ahmed")
    
    this.route.navigate(['/account'])
    
  }
}

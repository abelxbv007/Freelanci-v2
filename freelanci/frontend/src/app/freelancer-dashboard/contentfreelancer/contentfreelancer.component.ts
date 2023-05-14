import { Component } from '@angular/core';
import { offers } from './offres';
import { MyserveciesService } from 'src/app/myservecies.service';
import { SService } from './s.service';
@Component({
  selector: 'app-contentfreelancer',
  templateUrl: './contentfreelancer.component.html',
  styleUrls: ['./contentfreelancer.component.css'],
})
export class ContentfreelancerComponent {
  public mesoffres:any;
  public click:boolean=false;
  public msg="envoyer une proposition"
  public name="";
  constructor(public auth:MyserveciesService,public s:SService) {
    (() => {
      this.name=this.auth.getdata().name
      this.auth.getoffers().subscribe((res)=>{
        console.log(res)
        this.mesoffres=res;
        for(let x of this.mesoffres){
          x.prop=this.generateRandom(20);
          x.invit=this.generateRandom(10);
          x.emp=this.generateRandom(33);
          x.show=false;
        }
        });// Function logic goes here
      console.log("This function executes by itself!");
    })();
    
    
  }

 
  search=""
  select (x:string) {
    x=x.toLowerCase()
    return (x.includes(this.search.toLowerCase()))
   
    
  }
   expand(){
    if(this.msg=="envoyer une proposition"){
      this.msg="Reduire";
    }
    else{
      this.msg="envoyer une proposition";
    }
   
    
   }
  reload(){
    this.mesoffres=this.auth.getoffers();
    console.log(this.mesoffres)
  }
   generateRandom(maxLimit = 50){
    let rand = Math.random() * maxLimit;
    // say 99.81321410836433
  
    rand = Math.floor(rand); // 99
  
    return rand;
  }
  
}

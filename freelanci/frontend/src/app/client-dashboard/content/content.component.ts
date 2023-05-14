import { Component } from '@angular/core';
import { pubs } from './pubs';
import { MyserveciesService } from 'src/app/myservecies.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
 public mespubs:any[]=[];
 pubs:any;
 public window=0;
 public click:boolean=false;
 public m:string="afficher les propositions recus"
 generateRandom(maxLimit = 50){
  let rand = Math.random() * maxLimit;
  // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}
constructor(public auth:MyserveciesService){
  /*this.mespubs=[{title:"J'en ai besoin d'un graphic designer plein temps",budget:900,date:"22/10/2023",prop:19,invit:18,emp:0},
  {title:"Je suis a la recherche d'un frontweb developper ",budget:100,date:"22/10/2023",prop:20,invit:10,emp:5},{title:"j'ai besoin d'un back-end developper pour une mission freelance (php)",budget:400,date:"22/10/2021",prop:10,invit:8,emp:2}]*/
  (() => {
    this.auth.getoffers().subscribe((res)=>{
      console.log(res)
      this.pubs=res;
      for(let x of this.pubs){
        x.prop=this.generateRandom(20);
        x.invit=this.generateRandom(10);
        x.emp=this.generateRandom(33);
      }
      });
     
    console.log("This function executes by itself!");
  })();
 
  
  
}
change(){
  this.click= !this.click
  if(this.m!="Reduire")
  {
    this.m="Reduire";
  }
  else(
    this.m="Afficher les propositions recus"
  )
}





getpubs(){
}
  

}

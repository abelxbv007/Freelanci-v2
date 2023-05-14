import { Component } from '@angular/core';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-rightnavbar1',
  templateUrl: './rightnavbar1.component.html',
  styleUrls: ['./rightnavbar1.component.css']
})
export class Rightnavbar1Component {
  public name="";
constructor(public auth:MyserveciesService){
  this.name=this.auth.getdata().name;
}
}

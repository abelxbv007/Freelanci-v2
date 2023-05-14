import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment:number=450;
  bonus:any=0;
  total=this.payment+this.bonus;
constructor(){}


}

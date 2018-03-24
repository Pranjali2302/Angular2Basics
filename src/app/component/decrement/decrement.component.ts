
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {

  val: number;
  opr:String;
  constructor(private UserService:UserService) { }

  decrement(){
   this.val = this.val - 1;
   this.UserService.setValue(this.val);
   this.UserService.setOperator('Decrement');
  }

  ngOnInit() {
    this.UserService.valChanged.subscribe(
      value => this.val = value,
      err => console.log('Got the error'),
      () => alert('Subscription got completed!')
    );
    this.UserService.oprChanged.subscribe(
      opr => this.opr = opr,
      err => console.log('Got the error'),
      () => alert('Subscription got completed!')
    );
  }

}

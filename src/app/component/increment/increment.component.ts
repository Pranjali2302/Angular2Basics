
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  val :number;
  opr:String;
  constructor(private UserService:UserService) { }

  increment(){
   this.val = this.val + 1;
   this.UserService.setValue(this.val);
   this.UserService.setOperator('Increment');
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

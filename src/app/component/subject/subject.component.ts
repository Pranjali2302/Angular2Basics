
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  value:number;
  opr:String ;
  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.UserService.valChanged.subscribe(
      value => this.value = value,
      err => console.log('Got the error'),
      () => alert('Subscription got completed!')
    );
    this.UserService.oprChanged.subscribe(
      opr => this.opr = opr,
      err => console.log('Got the error'),
      () => alert('Subscription got completed!')
    );
  }
  ngOnDestroy() {
    
  }


}

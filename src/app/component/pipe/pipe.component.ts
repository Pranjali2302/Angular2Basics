import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  users:IUser[];

  today:Date;
  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.today = new Date();
    this.UserService.getAllUsersViaREST().subscribe(
      user => this.users=user
    )
  }
  addUser(){
    this.UserService.addUser(this.users);
  }
}

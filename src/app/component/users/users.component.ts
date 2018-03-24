import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[];
  
  constructor(private userService:UserService,
  private spinnerService: Ng4LoadingSpinnerService) { 

  }

  ngOnInit() {
    //this.users = this.userService.getAllUsers();
    this.spinnerService.show();
    this.userService.getAllUsersViaREST().subscribe(
      user => {
        this.users = user;
        this.spinnerService.hide();
      }
    )
    
  }

}

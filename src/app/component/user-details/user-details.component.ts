import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:IUser[];
  posts :any;
  access:boolean;
  selectedUser:IUser;
  constructor(private ActivatedRoute:ActivatedRoute,
  private userService:UserService,
  private spinnerService: Ng4LoadingSpinnerService) { 
    

  }
  ngOnInit() {
    //this.users = this.UserService.getAllUsers();
    this.userService.getAllUsersViaREST().subscribe(
      user => this.users = user
    )
    this.ActivatedRoute.params.subscribe((param)=>{
      this.spinnerService.show();
     this.userService.getAllUsersByIdViaREST(+param.id).subscribe(
        user => {
          this.selectedUser = user;
          this.spinnerService.hide();
        }
      );
      
      console.log(" this.selectedUser", this.selectedUser)
      if(+param.id % 2 == 0){
        this.access = false;
      }
      else{
        this.access = true;
      }
      console.log(this.selectedUser)
    });
  }

  createUser(){
    this.selectedUser.id = null;
    this.userService.createUser(this.selectedUser).subscribe(
      user => alert (` User is created with id : ${user.id}`),
      err => alert (` got error : ${err}`),
      () => alert(`Creation of user successful`)
    )
  }

  updateUser(){
    this.selectedUser.name = "sam";
    this.selectedUser.email = "sam@example.com";
    this.userService.updateUser(this.selectedUser).subscribe(
      user => alert (` User is updated with id : ${user.id}`),
      err => alert (` got error : ${err}`),
      () => alert(`Updatetion of user successful`)
    )
  }

  deleteUser(){
    this.userService.deleteUser(+this.selectedUser.id).subscribe(
      user => alert (` User is deleted with id : ${user.id}`),
      err => alert (` got error : ${err}`),
      () => alert(`deletetion of user successful`)
    )
  }

  getUserPosts(){
    this.posts = this.userService.getUserPosts(+this.selectedUser.id);
  }
}

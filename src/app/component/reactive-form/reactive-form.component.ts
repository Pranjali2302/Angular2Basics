import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
userForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm=new FormGroup({
      name : new FormControl("John Doe",Validators.required),
      username : new FormControl("John"),
      email : new FormControl("John.Doe@gmail.com"),
      phone : new FormControl("7083205036"),
      website : new FormControl("John.com"),
      address : new FormGroup({
        street : new FormControl("143,abc"),
        suite : new FormControl("12 suite"),
        city : new FormControl("Johnre"),
        zipcode : new FormControl("8000"),
        geo : new FormGroup({
          lat : new FormControl("125.5652254"),
          lng : new FormControl("1586.55")
        })
      }),
      company:new FormGroup({
        name : new FormControl("Joh"),
        catchPhrase : new FormControl("John JohnDoe JohnDoe Doe"),
        bs : new FormControl("John Doe")
      })

    });
  }
  submit(){
    console.log("submitted",this.userForm);
  }

}

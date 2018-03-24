import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  gender:string[];
  communicatiomModes:string[];
  constructor() { }

  ngOnInit() {
    this.gender=['Male','Female'];
    this.communicatiomModes = ['phone','email']
  }
  submit(userForm){
    console.log("form submitted!",userForm)
  }
}

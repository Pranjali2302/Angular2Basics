import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-atr-dir',
  templateUrl: './build-in-atr-dir.component.html',
  styleUrls: ['./build-in-atr-dir.component.css']
})
export class BuildInAtrDirComponent implements OnInit {
  messages : string[];
  showList:boolean;
  alertType:string;

  constructor() { }

  ngOnInit() {
    this.showList=true;
    this.messages =[
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5'
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-str-dir',
  templateUrl: './build-in-str-dir.component.html',
  styleUrls: ['./build-in-str-dir.component.css']
})
export class BuildInStrDirComponent implements OnInit {
  changeGradient:boolean;
  constructor() { }

  ngOnInit() {
    this.changeGradient =true;
  }

}

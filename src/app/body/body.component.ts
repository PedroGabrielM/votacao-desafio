import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  users = "";
  cont = 0;

  constructor() { }

  ngOnInit(): void {
   
  }

  onSubmitBody(){
    
  }

  onSubmitEnter() {
    console.log(10);
  }

}

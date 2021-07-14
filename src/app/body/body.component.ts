import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  options: string[] = ['option1' , 'option2' , 'option3' , 'option4' , 'option5'];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmitEnter() {
    alert("Vote send, ok");
    console.log(10);
  }

  onEnterUsers() {
    alert("Hello");
    console.log(10);
  }

  onSubmitViewList() {
    alert("View all oprions list");
    console.log(10);
    var btnViewList = document.getElementById('btnViewList');
  }
}

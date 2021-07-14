import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  options: string[] = ['option1' , 'option2' , 'option3' , 'option4' , 'option5'];
  
  votes: string[] = [];

  @Input() quantity: number = 0;

  @Output() mudouValor = new EventEmitter;

  constructor() { }


  ngOnInit(): void {

  }

  onEnterUsers() {
    alert("Hello");
    console.log(10);
  }
  
}

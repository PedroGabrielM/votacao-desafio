import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  options: string[] = ['option1' , 'option2' , 'option3' , 'option4' , 'option5'];

  constructor() { }

  ngOnInit(): void {
  }

}

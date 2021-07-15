import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  //ng@Input cont 

  optionsView: string[] = ['Options - 1 [ ]' , 'Options - 2 [ ]' , 'Options - 3 [ ]' , 'Options - 4 [ ]' , 'Options - 5 [ ]'];
  optionsList = "Hello";

  constructor() { }

  ngOnInit(): void {
  }

  onSendOptions(event: any) {
    console.log(event);
    this.optionsList = (<HTMLInputElement>event.target).value
  }

  optionsSendView() {
    return this.optionsView[0];
  }
}

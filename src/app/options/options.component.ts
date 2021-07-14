import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  optionsView: string[] = ['Options - 1' , 'Options - 2' , 'Options - 3' , 'Options - 4' , 'Options - 5'];

  constructor() { }

  ngOnInit(): void {
  }

}

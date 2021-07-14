import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  options: string[] = ['Option - 1' , 'Option - 2' , 'Option - 3' , 'Option - 4' , 'Option - 5'];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-options',
  templateUrl: './view-options.component.html',
  styleUrls: ['./view-options.component.css']
})
export class ViewOptionsComponent implements OnInit {

  options: string[] = ['option1' , 'option2' , 'option3' , 'option4' , 'option5'];
  
  votes: string[] = [];

  @Input() quantity: number = 0;

  @Output() mudouValor = new EventEmitter;

  constructor() { }


  ngOnInit(): void {

  }

  onSubmitViewList() {
    alert("View all options list");
    console.log(10);
    var btnViewList = document.getElementById('btnViewList');
    return this.options;
  }

}

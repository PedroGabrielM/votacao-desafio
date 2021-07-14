import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-options',
  templateUrl: './view-options.component.html',
  styleUrls: ['./view-options.component.css']
})
export class ViewOptionsComponent implements OnInit {
  
  viewOptions: string[] = ['Options - 1 [ ]' , 'Options - 2 [ ]' , 'Options - 3 [ ]' , 'Options - 4 [ ]' , 'Options - 5 [ ]'];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmitViewList() {
    var btnViewList = document.getElementById('btnSendOptions');
    return btnViewList;
  }

}

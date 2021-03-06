import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-send-options',
  templateUrl: './send-options.component.html',
  styleUrls: ['./send-options.component.css'],
  providers: [OptionsService]
})
export class SendOptionsComponent implements OnInit {

    
  optionsSend: string[] = [];
  
  @Input() quantity: number = 0;

  @Output() sendOptionsList = new EventEmitter;

  constructor(private optionsService: OptionsService) { }


  ngOnInit(): void {
    this.optionsSend = this.optionsService.getOptions();
  }

  sendOptions() {
    console.log(this.optionsSend);
    console.log(this.quantity);
    this.quantity++;
  }

  onSendOptions(event: any) {
   console.log(10);
  }
}

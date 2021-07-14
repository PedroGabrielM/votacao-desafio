import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-send-options',
  templateUrl: './send-options.component.html',
  styleUrls: ['./send-options.component.css']
})
export class SendOptionsComponent implements OnInit {

    
  options: string[] = [];
  
  votes: string[] = ['option1' , 'option2' , 'option3' , 'option4' , 'option5'];

  @Input() quantity: number = 0;

  @Output() mudouValor = new EventEmitter;

  constructor(private optionsService: OptionsService) { }


  ngOnInit(): void {
   // this.options = this.optionsService.getOptions;
  }

  onSubmitEnter() {
    alert("Vote send, ok");
    console.log(10);
    this.quantity++;
  }

}

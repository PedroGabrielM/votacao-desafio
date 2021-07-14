import { Injectable, EventEmitter } from '@angular/core';

//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

 // SERVER_URL = "http://localhost:3000";

  sendOptionsList = new EventEmitter();

  options: string[] = ['Option - 1' , 'Option - 2' , 'Option - 3' , 'Option - 4' , 'Option - 5'];

  //private http: HttpClient

  constructor() { 
    console.log('OptionsService');
  }

  //public getOptions() {
  //  return this.http.get(`${this.SERVER_URL}/options`)
  //}

  getOptions(){
     return this.options;  
  }

  addOptions(options: string){
    this.options.push(options);
  }
}

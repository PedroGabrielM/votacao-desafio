import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  SERVER_URL = "http://localhost:3000";


  constructor(private http: HttpClient) { }

  public getOptions() {
    return this.http.get(`${this.SERVER_URL}/options`)
  }
}

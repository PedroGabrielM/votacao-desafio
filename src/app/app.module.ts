import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ModalComponent } from './modal/modal.component';
import { OptionsComponent } from './options/options.component';
import { OptionsService } from './services/options.service';
import { SendOptionsComponent } from './send-options/send-options.component';
import { ViewOptionsComponent } from './view-options/view-options.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ModalComponent,
    OptionsComponent,
    SendOptionsComponent,
    ViewOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //providers:[OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

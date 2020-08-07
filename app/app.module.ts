import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegFormComponent} from './regform/regform.component';
import {LoginFormComponent} from './loginform/loginform.component';
import {ItemViewComponent} from './itemv/itemv.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    LoginFormComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

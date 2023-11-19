import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

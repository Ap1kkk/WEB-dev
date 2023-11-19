import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    RegistrerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule { }

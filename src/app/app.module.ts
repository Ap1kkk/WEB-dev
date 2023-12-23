import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { SystemComponent } from './system/system.component';
import { SharedModule } from "./shared/shared.module";
import { SystemModule } from './system/system.module';
import { AdminGuard } from './shared/guards/admin.guard';


@NgModule({
    declarations: [
        AppComponent,
        SystemComponent,
    ],
    providers: [UsersService, AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        SystemModule,
        SharedModule
    ]
})
export class AppModule { }

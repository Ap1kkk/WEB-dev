import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule ({

  imports: [ReactiveFormsModule, FormsModule, RouterLink, DatePipe, FontAwesomeModule],

  exports: [ReactiveFormsModule, FormsModule, FooterComponent, HeaderComponent],

  declarations: [FooterComponent, HeaderComponent]
})

export class SharedModule { }
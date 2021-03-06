import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { LoginRoutingModule } from './login-routing.module';
import { HelperModule } from '../helper/helper.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HelperModule,
    ClarityModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule { }

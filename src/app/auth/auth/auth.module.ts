import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {ChangePasswordComponent} from '../change-password/change-password.component';
import {UpdateComponent} from '../user/update/update.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

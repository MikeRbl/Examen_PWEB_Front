import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
declarations: [LoginComponent],
  exports: [], //para que lo pueda usar el modulo
imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule],
})
export class LoginModule {}

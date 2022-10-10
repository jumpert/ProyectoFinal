import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../login.service';
import { InputsFieldComponent } from '../inputs-field/inputs-field.component';



@NgModule({
  declarations: [LoginComponent, InputsFieldComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService,
        
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }

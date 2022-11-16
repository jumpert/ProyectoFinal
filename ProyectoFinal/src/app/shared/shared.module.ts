import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsFieldComponent } from '../inputs-field/inputs-field.component';
import { UseButtonComponent } from '../use-button/use-button.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    InputsFieldComponent,
    UseButtonComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputsFieldComponent,
    UseButtonComponent,
    HeaderComponent,
  ],
})
export class SharedModule { }

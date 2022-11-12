import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsFieldComponent } from '../inputs-field/inputs-field.component';
import { UseButtonComponent } from '../use-button/use-button.component';



@NgModule({
  declarations: [
    InputsFieldComponent,
    UseButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputsFieldComponent,
    UseButtonComponent,

  ]
})
export class SharedModule { }

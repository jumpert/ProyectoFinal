import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsFieldComponent } from '../inputs-field/inputs-field.component';
import { UseButtonComponent } from '../use-button/use-button.component';
import { HeaderComponent } from '../header/header.component';
import { NavToolComponent } from '../nav-tool/nav-tool.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    InputsFieldComponent,
    UseButtonComponent,
    HeaderComponent,
    NavToolComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forRoot([])
  ],
  exports: [
    InputsFieldComponent,
    UseButtonComponent,
    HeaderComponent,
    NavToolComponent
  ],
})
export class SharedModule { }

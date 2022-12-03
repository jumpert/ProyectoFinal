import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsFieldComponent } from '../inputs-field/inputs-field.component';
import { UseButtonComponent } from '../use-button/use-button.component';
import { HeaderComponent } from '../header/header.component';
import { NavToolComponent } from '../nav-tool/nav-tool.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltrosComponent } from '../product-card/filtros/filtros.component';



@NgModule({
  declarations: [
    InputsFieldComponent,
    UseButtonComponent,
    HeaderComponent,
    NavToolComponent,
    FiltrosComponent,
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
    NavToolComponent,
    FiltrosComponent
  ],
})
export class SharedModule { }

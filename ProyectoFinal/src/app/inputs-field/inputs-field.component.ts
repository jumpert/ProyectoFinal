import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputs-field',
  templateUrl: './inputs-field.component.html',
  styleUrls: ['./inputs-field.component.css']
})
export class InputsFieldComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  @Input() formType!: any;  
  @Input() phText!: any;
}



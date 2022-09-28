import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-button',
  templateUrl: './use-button.component.html',
  styleUrls: ['./use-button.component.css']
})
export class UseButtonComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  referenceText!: string;

}

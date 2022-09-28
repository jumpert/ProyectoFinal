import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFieldComponent } from './inputs-field.component';

describe('InputsFieldComponent', () => {
  let component: InputsFieldComponent;
  let fixture: ComponentFixture<InputsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

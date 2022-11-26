
import { ChangeDetectionStrategy, EventEmitter, Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export class LoginComponent implements OnInit{
  @Output()
  userEmail:string = 'Ingrese su Email';
  userPsw:string = 'Ingrese su Contraseña';
  logText:string = 'Ingresar';
  endMsg:string = "Login";

  public myForm!:FormGroup;

  constructor(private logService: LoginService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      email:['',[Validators.required]],
      password:['',Validators.required]
    });
  }


  public submitForm(){
    alert("Se va a enviar el formulario");
    console.log(this.myForm.value);
  }

  public logIn() {
    this.logService.logIn();
    console.log("logeado");
  }

}
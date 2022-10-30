import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{
  userEmail:string = 'Ingrese su Email';
  userPsw:string = 'Ingrese su Contraseña';
  logText:string = 'Ingresar';

  public myForm!:FormGroup;

  constructor(private logService: LoginService, private fb:FormBuilder) {}
  
  endMsg:string = "Login";

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submitForm(){
    alert("Se va a enviar el formulario");
    console.log(this.myForm.value);
  }


}
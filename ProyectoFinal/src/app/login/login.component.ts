
import { ChangeDetectionStrategy, EventEmitter, Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

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
  id!:number;
  user?: User;
  uEmail?:string;
  uPassword?:string;
  public myForm!:FormGroup;
  
  constructor(private logService: LoginService, private fb:FormBuilder, private uS: UserService) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
    this.getUser();
    
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }


  public submitForm(){
    alert("Se va a enviar el formulario");
    console.log(this.myForm.value);
  }

  public logIn() {
    this.logService.logIn;
    this.logService.redirectToHome();
  }

  getUser(): void {
    this.uS.getUser(1)
      .subscribe(user => this.user = user);
  }

}
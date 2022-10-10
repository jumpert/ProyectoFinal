import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-nav-tool',
  templateUrl: './nav-tool.component.html',
  styleUrls: ['./nav-tool.component.css']
})
export class NavToolComponent implements OnInit {
  get isUserLoggedIn(): boolean {
    //return this.logService.loggedIn;
    return true;
  }

  @Output() closeTool = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closeTool.emit();
  }
  constructor(private logService: LoginService) { }


  ngOnInit(): void {
  }

  logOut(): void {
    //this.logService.logOut();
  }

}

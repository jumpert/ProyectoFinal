import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { LoginService } from '../services/login.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-tool',
  templateUrl: './nav-tool.component.html',
  styleUrls: ['./nav-tool.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavToolComponent implements OnInit {
  currentPath: string = '';
  
  get isUserLoggedIn(): boolean {
    //return this.logService.loggedIn;
    return true;
  }

  @Output() closeTool = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closeTool.emit();
  }
  constructor(private logService: LoginService, private location: Location) { }


  ngOnInit(): void {
    this.currentPath = this.location.path();
  }

  logOut(): void {
    this.logService.logOut();
  }
  public isMenuCollapsed = true;
  
}

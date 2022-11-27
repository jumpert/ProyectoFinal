import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  @Input() user!: User;
  
  profilePicture?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser(1);
    console.log(this.users.length);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getUser(id:number)  {
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  
}

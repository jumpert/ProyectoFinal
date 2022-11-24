import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  users: User[] = [];
  @Input() user!: User;
  //user: User = {id: 0, firstName: 'admin', email:'admin@starmarket.com', password: 'admin123', profileImg: '../../assets/profile-pics/admin.jpg'};
  profilePicture?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
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
  
  isAdmin(id: number): boolean {
    if (id === 0) {
      return true;
    } else {
      return false;
    }
  }
}

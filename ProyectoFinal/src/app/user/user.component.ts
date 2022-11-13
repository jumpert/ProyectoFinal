import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  users: User[] = [
    //{id: 0, firstName: 'admin', email:'admin@starmarket.com', password: 'admin123', profileImg: '../../assets/profile-pics/admin.jpg'},
    //{id: 1, firstName: 'user1', email: 'user1@gmail.com', password: 'user1123', profileImg: '../../assets/profile-pics/user1.jpg'},
    //{id: 2, firstName: 'user2', email: 'user2@gmail.com', password: 'user2123', profileImg: '../../assets/profile-pics/user2.jpg'}
  ];

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
  
  isAdmin(id: number): boolean {
    if (id === 0) {
      return true;
    } else {
      return false;
    }
  }
}

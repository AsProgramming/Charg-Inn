import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl'],
  providers:[LoginService]
})
export class ProfileComponent implements OnInit {
  
  users: User[];
  user: User;
  email: string;
  password: string;
  role: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
      this.loginService.getUsers()
      .subscribe(users => this.users = users);
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl'],
  providers:[LoginService]
})
export class UsersComponent implements OnInit {

  users: User[];
  user: User;
  email: string;
  password: string;
  role: string;


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
    console.log('routing working333');
   /* this.loginService.getUsers()
        .subscribe(users => this.users = users);*/
  }

}

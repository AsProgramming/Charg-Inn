import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl'],
  providers:[LoginService]
})
export class RegisterComponent implements OnInit {
  
  user: User = {
    email: '',
    password: ''
  };
  users: Array<User> = [];
  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  registerUser() {
    console.log(this.user);
    const registeringUser = {
      email: this.user.email,
      password: this.user.password,
      role: 'user'
    };

    this.loginService.addUser(registeringUser)
        .subscribe(res => {
          this.router.navigateByUrl('/');
          //  this.loginService.setToken(res['token']);
          //  this.router.navigateByUrl('/profile');
          }, err =>{
            console.log(err._body);
          //  this.serverErrorMsg = JSON.parse(err._body);
          //  console.log(this.serverErrorMsg);
          });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };
  users: Array<User> = [];
  email: string;
  password: string;
  serverErrorMsg: string;

  constructor(private loginService: LoginService, private router: Router) { }

  loginAttempt() {
    console.log(this.user);
    const retUser = {
      email: this.user.email,
      password: this.user.password,
    };

    this.loginService.verifyUser(retUser)
        .subscribe(res => {
          this.loginService.setToken(res['token']);
          this.router.navigateByUrl('/profile');
        }, err =>{
          console.log(err._body);
          this.serverErrorMsg = JSON.parse(err._body);
          console.log(this.serverErrorMsg);
        });
  }

  ngOnInit() {
  }
  

}

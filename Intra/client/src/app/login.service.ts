import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from './user';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('http://localhost:3000/api/users')
    .pipe(map(res => res.json()));
  }

  addUser(newUser) {
    console.log(newUser);
    const headerz = new Headers();
    headerz.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/createUser', newUser, {headers: headerz}).pipe(map(res => res.json()));
  }

  verifyUser(retUser) {
    console.log(retUser);
    const headerz = new Headers();
    headerz.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/login', retUser, {headers: headerz}).pipe(map(res => res.json()));
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

}

import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';

import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Injectable()
export class AuthenticationService implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string> localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  ngOnInit() {
  }

  login(name: string, pwd: string) {
    const buyer = {
      username: name,
      password: pwd
    };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post<any>('http://localhost:8080/MarketApp/login', JSON.stringify(buyer), options)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  register(name: string, pwd: string, eml: string, fname: string, lname: string) {
    const buyer = {
      username: name,
      password: pwd,
      email: eml,
      firstname: fname,
      lastname: lname
    };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };

    return this.http.post<any>('http://localhost:8080/MarketApp/register', JSON.stringify(buyer), options)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('newUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}

import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './rest.service';

@Injectable()
export class AuthenticationService implements OnInit {

  constructor(private restService: RestService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  login(name: string, pwd: string) {
    const payload = {
      username: name,
      password: pwd
    };
    return this.restService.post('login', payload);
  }

  register(name: string, pwd: string, eml: string, fname: string, lname: string, phone: string) {
    const payload = {
      username: name,
      password: pwd,
      email: eml,
      first_name: fname,
      last_name: lname,
      phone: phone
    };
    return this.restService.post('register', payload);
  }
}

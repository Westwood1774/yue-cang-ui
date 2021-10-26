import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted!: boolean;
  returnUrl!: string;

  constructor(private userHttpService: AuthenticationService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/main';
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.f()['username'].disable();
    this.f()['password'].disable();
  }

  enableForm() {
    this.f()['username'].enable();
    this.f()['password'].enable();
  }

  f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.disableForm();
    const login$ = this.userHttpService.login(this.f().username.value, this.f().password.value);
    login$.pipe(first()).subscribe(res => {
      if (res.status === 'Success') {
        this.router.navigate([this.returnUrl]);
        // this.router.navigate(['/main']);
      } else {
        alert(res.message);
        this.enableForm();
      }
    });
  }

}

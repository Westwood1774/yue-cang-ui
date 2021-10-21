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
  processing!: boolean;
  returnUrl!: string;

  constructor(private userHttpService: AuthenticationService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.loginForm.controls['username'].disable;
    this.loginForm.controls['password'].disable;
  }

  enableForm() {
    this.loginForm.controls['username'].enable;
    this.loginForm.controls['password'].enable;
  }

  f() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.processing = true;
    this.disableForm();
    this.userHttpService.login(this.f().username.value, this.f().password.value).pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, () => {
      this.processing = false;
      this.enableForm();
    });
  }

}

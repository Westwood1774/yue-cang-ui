import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store-shipping-in',
  templateUrl: './store-shipping-in.component.html',
  styleUrls: ['./store-shipping-in.component.css'],
})
export class StoreShippingInComponent implements OnInit {

  shipInForm!: FormGroup;
  submitted = false;
  operationFinished = 'no';

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.shipInForm = this.formBuilder.group({
      boxId: ['', Validators.required],
      ifsku: ['', Validators.required],
      boxWeight: ['', Validators.required],
      arriveDate: ['', Validators.required],
      shippingCompanyName: ['', Validators.required],
      trackingNumber: ['', [Validators.required, Validators.minLength(30)]],
    });
  }

  f() {
    return this.shipInForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  }

  onCancel() {
    this.router.navigateByUrl('/main');
  }
}

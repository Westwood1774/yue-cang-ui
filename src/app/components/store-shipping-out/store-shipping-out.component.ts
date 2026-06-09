import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store-shipping-out',
  templateUrl: './store-shipping-out.component.html',
  styleUrls: ['./store-shipping-out.component.css']
})
export class StoreShippingOutComponent implements OnInit {

  shipOutForm!: FormGroup;
  submitted = false;
  operationFinished = 'no';

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.shipOutForm = this.formBuilder.group({
      BoxWeight: ['', Validators.required],
      boxSize: ['', Validators.required],
      shipOutDate : ['', Validators.required],
    });
  }

  f() {
    return this.shipOutForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  }

  onCancel() {
    this.router.navigateByUrl('/main');
  }

}

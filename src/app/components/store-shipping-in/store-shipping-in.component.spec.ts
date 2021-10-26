import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreShippingInComponent } from './store-shipping-in.component';

describe('StoreShippingInComponent', () => {
  let component: StoreShippingInComponent;
  let fixture: ComponentFixture<StoreShippingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreShippingInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreShippingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

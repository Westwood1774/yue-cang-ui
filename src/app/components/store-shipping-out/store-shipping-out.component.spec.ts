import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreShippingOutComponent } from './store-shipping-out.component';

describe('StoreShippingOutComponent', () => {
  let component: StoreShippingOutComponent;
  let fixture: ComponentFixture<StoreShippingOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreShippingOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreShippingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

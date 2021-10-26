import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCheckingComponent } from './goods-checking.component';

describe('GoodsCheckingComponent', () => {
  let component: GoodsCheckingComponent;
  let fixture: ComponentFixture<GoodsCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsCheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

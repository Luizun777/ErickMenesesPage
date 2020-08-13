import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRopaComponent } from './producto-ropa.component';

describe('ProductoRopaComponent', () => {
  let component: ProductoRopaComponent;
  let fixture: ComponentFixture<ProductoRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

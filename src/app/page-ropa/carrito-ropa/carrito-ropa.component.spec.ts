import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoRopaComponent } from './carrito-ropa.component';

describe('CarritoRopaComponent', () => {
  let component: CarritoRopaComponent;
  let fixture: ComponentFixture<CarritoRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

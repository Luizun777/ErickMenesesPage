import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalRopaComponent } from './sucursal-ropa.component';

describe('SucursalRopaComponent', () => {
  let component: SucursalRopaComponent;
  let fixture: ComponentFixture<SucursalRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

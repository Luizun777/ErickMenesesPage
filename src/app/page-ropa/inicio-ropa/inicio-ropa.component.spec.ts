import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRopaComponent } from './inicio-ropa.component';

describe('InicioRopaComponent', () => {
  let component: InicioRopaComponent;
  let fixture: ComponentFixture<InicioRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

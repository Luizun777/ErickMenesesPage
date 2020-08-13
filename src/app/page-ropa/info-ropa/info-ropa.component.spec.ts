import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRopaComponent } from './info-ropa.component';

describe('InfoRopaComponent', () => {
  let component: InfoRopaComponent;
  let fixture: ComponentFixture<InfoRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRopaComponent } from './header-ropa.component';

describe('HeaderRopaComponent', () => {
  let component: HeaderRopaComponent;
  let fixture: ComponentFixture<HeaderRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

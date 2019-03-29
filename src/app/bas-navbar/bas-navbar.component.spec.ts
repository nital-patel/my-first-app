import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasNavbarComponent } from './bas-navbar.component';

describe('BasNavbarComponent', () => {
  let component: BasNavbarComponent;
  let fixture: ComponentFixture<BasNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

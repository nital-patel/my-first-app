import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpingbootComponent } from './spingboot.component';

describe('SpingbootComponent', () => {
  let component: SpingbootComponent;
  let fixture: ComponentFixture<SpingbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpingbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpingbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

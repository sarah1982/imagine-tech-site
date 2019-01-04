import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpComponent } from './user-exp.component';

describe('UserExpComponent', () => {
  let component: UserExpComponent;
  let fixture: ComponentFixture<UserExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

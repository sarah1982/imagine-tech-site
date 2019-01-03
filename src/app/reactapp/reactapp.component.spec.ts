import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactappComponent } from './reactapp.component';

describe('ReactappComponent', () => {
  let component: ReactappComponent;
  let fixture: ComponentFixture<ReactappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

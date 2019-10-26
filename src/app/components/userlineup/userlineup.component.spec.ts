import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlineupComponent } from './userlineup.component';

describe('UserlineupComponent', () => {
  let component: UserlineupComponent;
  let fixture: ComponentFixture<UserlineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

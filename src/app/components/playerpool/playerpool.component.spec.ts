import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerpoolComponent } from './playerpool.component';

describe('PlayerpoolComponent', () => {
  let component: PlayerpoolComponent;
  let fixture: ComponentFixture<PlayerpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSecondComponent } from './users-second.component';

describe('UsersSecondComponent', () => {
  let component: UsersSecondComponent;
  let fixture: ComponentFixture<UsersSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

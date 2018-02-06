import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersThirdComponent } from './users-third.component';

describe('UsersThirdComponent', () => {
  let component: UsersThirdComponent;
  let fixture: ComponentFixture<UsersThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

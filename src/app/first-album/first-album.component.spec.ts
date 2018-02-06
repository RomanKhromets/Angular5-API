import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAlbumComponent } from './first-album.component';

describe('FirstAlbumComponent', () => {
  let component: FirstAlbumComponent;
  let fixture: ComponentFixture<FirstAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAlbumComponent } from './third-album.component';

describe('ThirdAlbumComponent', () => {
  let component: ThirdAlbumComponent;
  let fixture: ComponentFixture<ThirdAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

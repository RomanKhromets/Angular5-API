import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAlbumComponent } from './second-album.component';

describe('SecondAlbumComponent', () => {
  let component: SecondAlbumComponent;
  let fixture: ComponentFixture<SecondAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

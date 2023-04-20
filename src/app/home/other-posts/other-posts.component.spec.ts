import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPostsComponent } from './other-posts.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OtherPostsComponent', () => {
  let component: OtherPostsComponent;
  let fixture: ComponentFixture<OtherPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPostsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

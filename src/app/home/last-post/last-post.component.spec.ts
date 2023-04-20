import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPostComponent } from './last-post.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LastPostComponent', () => {
  let component: LastPostComponent;
  let fixture: ComponentFixture<LastPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

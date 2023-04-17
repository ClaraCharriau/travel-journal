import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceNotesComponent } from './advice-notes.component';

describe('AdviceNotesComponent', () => {
  let component: AdviceNotesComponent;
  let fixture: ComponentFixture<AdviceNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

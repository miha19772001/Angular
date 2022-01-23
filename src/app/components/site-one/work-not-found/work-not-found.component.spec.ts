import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNotFoundComponent } from './work-not-found.component';

describe('WorkNotFoundComponent', () => {
  let component: WorkNotFoundComponent;
  let fixture: ComponentFixture<WorkNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTwoSelectComponent } from './site-two-select.component';

describe('SiteTwoSelectComponent', () => {
  let component: SiteTwoSelectComponent;
  let fixture: ComponentFixture<SiteTwoSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTwoSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTwoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

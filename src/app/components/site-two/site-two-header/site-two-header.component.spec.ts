import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTwoHeaderComponent } from './site-two-header.component';

describe('SiteTwoHeaderComponent', () => {
  let component: SiteTwoHeaderComponent;
  let fixture: ComponentFixture<SiteTwoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTwoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTwoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

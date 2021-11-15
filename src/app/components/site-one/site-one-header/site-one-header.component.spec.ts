import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOneHeaderComponent } from './site-one-header.component';

describe('SiteOneHeaderComponent', () => {
  let component: SiteOneHeaderComponent;
  let fixture: ComponentFixture<SiteOneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteOneHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteThreeHeaderComponent } from './site-three-header.component';

describe('SiteThreeHeaderComponent', () => {
  let component: SiteThreeHeaderComponent;
  let fixture: ComponentFixture<SiteThreeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteThreeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteThreeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

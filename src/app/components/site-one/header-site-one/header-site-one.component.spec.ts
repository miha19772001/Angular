import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSiteOneComponent } from './header-site-one.component';

describe('HeaderSiteOneComponent', () => {
  let component: HeaderSiteOneComponent;
  let fixture: ComponentFixture<HeaderSiteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSiteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSiteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

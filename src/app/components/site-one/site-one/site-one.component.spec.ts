import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOneComponent } from '../site-one/site-one.component';

describe('SiteOneComponent', () => {
  let component: SiteOneComponent;
  let fixture: ComponentFixture<SiteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

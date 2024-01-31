import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPagerComponent } from './social-media-pager.component';

describe('SocialMediaPagerComponent', () => {
  let component: SocialMediaPagerComponent;
  let fixture: ComponentFixture<SocialMediaPagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaPagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

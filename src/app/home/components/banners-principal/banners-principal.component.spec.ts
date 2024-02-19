import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersPrincipalComponent } from './banners-principal.component';

describe('BannersPrincipalComponent', () => {
  let component: BannersPrincipalComponent;
  let fixture: ComponentFixture<BannersPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannersPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesPrincipalComponent } from './icones-principal.component';

describe('IconesPrincipalComponent', () => {
  let component: IconesPrincipalComponent;
  let fixture: ComponentFixture<IconesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconesPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

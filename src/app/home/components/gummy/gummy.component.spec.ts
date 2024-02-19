import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GummyComponent } from './gummy.component';

describe('GummyComponent', () => {
  let component: GummyComponent;
  let fixture: ComponentFixture<GummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GummyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

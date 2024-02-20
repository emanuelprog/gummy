import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueridinhosComponent } from './queridinhos.component';

describe('QueridinhosComponent', () => {
  let component: QueridinhosComponent;
  let fixture: ComponentFixture<QueridinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueridinhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueridinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

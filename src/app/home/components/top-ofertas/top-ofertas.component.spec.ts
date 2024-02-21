import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfertasComponent } from './top-ofertas.component';

describe('QueridinhosComponent', () => {
  let component: TopOfertasComponent;
  let fixture: ComponentFixture<TopOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopOfertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

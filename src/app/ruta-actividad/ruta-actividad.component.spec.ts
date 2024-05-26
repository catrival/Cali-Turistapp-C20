import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActividadComponent } from './ruta-actividad.component';

describe('RutaActividadComponent', () => {
  let component: RutaActividadComponent;
  let fixture: ComponentFixture<RutaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

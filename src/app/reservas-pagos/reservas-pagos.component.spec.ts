import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasPagosComponent } from './reservas-pagos.component';

describe('ReservasPagosComponent', () => {
  let component: ReservasPagosComponent;
  let fixture: ComponentFixture<ReservasPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

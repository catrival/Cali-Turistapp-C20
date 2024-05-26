import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GestorComponent } from './gestor/gestor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ReservasPagosComponent } from './reservas-pagos/reservas-pagos.component';
import { RutaActividadComponent } from './ruta-actividad/ruta-actividad.component';
import { VisitanteComponent } from './visitante/visitante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GestorComponent,ProveedorComponent, ReservasPagosComponent, 
    RutaActividadComponent,VisitanteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cali-Turistapp-C20';
}

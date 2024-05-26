import { Component } from '@angular/core';
import { RutaService } from '../services/ruta.service';

@Component({
  selector: 'app-ruta-actividad',
  standalone: true,
  imports: [],
  templateUrl: './ruta-actividad.component.html',
  styleUrl: './ruta-actividad.component.scss'
})
export class RutaActividadComponent {
  rutas!: any[];
  constructor(private rutaService: RutaService) { }

  ngOnInit() {
    this.rutas = this.rutaService.getRutas();
  }
}

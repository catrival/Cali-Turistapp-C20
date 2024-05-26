import { Component } from '@angular/core';
import { VisitanteService } from '../services/visitante.service';

@Component({
  selector: 'app-visitante',
  standalone: true,
  imports: [],
  templateUrl: './visitante.component.html',
  styleUrl: './visitante.component.scss'
})
export class VisitanteComponent {

  visitantes!: any[];
  
  constructor(private visitanteService: VisitanteService) { }

  ngOnInit() {
    this.visitantes = this.visitanteService.getVisitantes();
  }
}

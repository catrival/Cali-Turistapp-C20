import { Component } from '@angular/core';
import { GestorService } from '../services/gestor.service';

@Component({
  selector: 'app-gestor',
  standalone: true,
  imports: [],
  templateUrl: './gestor.component.html',
  styleUrl: './gestor.component.scss'
})
export class GestorComponent {
  gestores!: any[];
  constructor(private gestorService: GestorService) { }

  ngOnInit() {
    this.gestores = this.gestorService.getGestores();
  }

}

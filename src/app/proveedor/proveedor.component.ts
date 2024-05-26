import { Component } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.scss'
})
export class ProveedorComponent {
  proveedores!: any[];
  
  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
    this.proveedores = this.proveedorService.getProveedores();
  }
}

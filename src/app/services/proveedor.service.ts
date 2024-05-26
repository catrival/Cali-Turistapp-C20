import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

    // Datos ficticios para proveedores
    private dataProveedores = [
      { id: 1, nombre: 'Rodrigo Valencia', activo: true }, 
      { id: 2, nombre: 'Emmanuel Alegria', activo: true }, 
      { id: 3, nombre: 'Mario Ramos', activo: false}, 
    ];

  constructor() { }

  getProveedores() {
    return this.dataProveedores;
  }
}

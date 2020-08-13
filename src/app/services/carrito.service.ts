import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:number = 0;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggle() {
    this.carrito = 0;
    JSON.parse(localStorage.getItem('carrito')) ? null : localStorage.setItem('carrito', JSON.stringify([]));
    JSON.parse(localStorage.getItem('carrito')).forEach((data: any) => this.carrito += data.productos.length);
    this.change.emit(this.carrito);
  }

  agregarCarrito(producto: any) {
    JSON.parse(localStorage.getItem('carrito')) ? null : localStorage.setItem('carrito', JSON.stringify([]));
    const carritoCookies = JSON.parse(localStorage.getItem('carrito'));
    carritoCookies.push({
      nombre: producto.nombre,
      desc: producto.desc,
      img: producto.img,
      precio: producto.precio
    });
    localStorage.setItem('carrito', JSON.stringify(carritoCookies));
  }
}

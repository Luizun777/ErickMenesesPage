import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productosCarrito: number = 0;
  productosLista: any = [];

  constructor(
    private carritoSrv: CarritoService
  ) { }

  ngOnInit(): void {
    this.carrito();
  }

  carrito() {
    this.productosLista = JSON.parse(localStorage.getItem('carrito'));
    this.productosCarrito = this.productosLista.length;
  }

  eliminar(index: number) {
    this.productosLista.splice(index, 1);
    this.productosCarrito = this.productosLista.length;
    localStorage.setItem('carrito', JSON.stringify(this.productosLista));
  }

}

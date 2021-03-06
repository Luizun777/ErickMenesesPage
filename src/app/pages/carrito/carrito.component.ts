import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  formulario: FormGroup;
  productosCarrito: number = 0;
  productosLista: any = [];

  totalServicio: number = 0;
  totalServicioMasIva: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.setFormulario();
    this.carrito();
  }

  carrito() {
    this.productosLista = JSON.parse(localStorage.getItem('carrito'));
    this.productosCarrito = this.productosLista.length;
    this.sumasTotales();
  }

  sumasTotales() {
    this.productosLista.forEach((prod: any) => {
      this.totalServicio += prod.precio;
      this.totalServicioMasIva += (prod.precio*0.16);
      this.total = this.totalServicio + this.totalServicioMasIva;
    });
  }

  eliminar(index: number) {
    this.productosLista.splice(index, 1);
    this.productosCarrito = this.productosLista.length;
    localStorage.setItem('carrito', JSON.stringify(this.productosLista));
    this.sumasTotales();
  }

  setFormulario() {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required
      ]),
      'correo': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'telefono': new FormControl('')
    });
  }

  contactame() {
    Swal.fire({
      title: 'GRACIAS',
      text: 'En brevedad me comunicare contigo para brindarte información sobre los servicios y tu cotización, gracias.',
      // icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }

}

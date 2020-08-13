import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto-ropa',
  templateUrl: './producto-ropa.component.html',
  styleUrls: ['./producto-ropa.component.scss']
})
export class ProductoRopaComponent implements OnInit {

  serviciosList: any = [
    {
      id: 1,
      nombre: 'CONJUNTO',
      img: 'assets/img/prodcutos/ropa0.png',
      precio: 50,
      desc: 'Folletos y Catálogos - Anuncios para prensa - Material gráfico y diseño gráfico para profesionales y empresas - Presentaciones'
    },
    {
      id: 2,
      nombre: 'CONJUNTO',
      img: 'assets/img/prodcutos/ropa1.png',
      precio: 10,
      desc: 'Desarrollo de páginas web - Landing pages - Plataformas web'
    },
    {
      id: 3,
      nombre: 'CHAMARRA',
      img: 'assets/img/prodcutos/ropa2.png',
      precio: 20,
      desc: 'Desarrollo de Aplicaciones móviles ANDROID - iOS.'
    },
    {
      id: 4,
      nombre: 'PANTALON',
      img: 'assets/img/prodcutos/ropa3.png',
      precio: 30,
      desc: 'Diseño de prototipos UX/UI Plataformas web - Aplicaciones Móviles.'
    },
    {
      id: 5,
      nombre: 'CAMISA',
      img: 'assets/img/prodcutos/ropa4.png',
      precio: 40,
      desc: 'Creación de contenido para redes sociales. Facebook - Instagram - LinkIn - Twitter'
    },
    {
      id: 6,
      nombre: 'CONJUNTO',
      img: 'assets/img/prodcutos/ropa5.png',
      precio: 50,
      desc: 'DESARROLLO DE JUEGOS'
    },
    {
      id: 7,
      nombre: 'VESTIDO',
      img: 'assets/img/prodcutos/ropa6.png',
      precio: 60,
      desc: 'Cartelería - Roll-ups y material gráfico para eventos - Folletos y catálogos - Camisetas y material publicitario'
    },
    {
      id: 8,
      nombre: 'PANTALON',
      img: 'assets/img/prodcutos/ropa7.png',
      precio: 70,
      desc: 'Diseño de marca personal - Diseño de web y/o blog - Papelería personal y material gráfico para profesionales - Asesoramiento'
    }
  ];

  constructor(
    private carritoSrv: CarritoService
  ) { }

  ngOnInit(): void {
  }

  agregar(producto: any) {
    this.carritoSrv.agregarCarrito(producto);
  }

}

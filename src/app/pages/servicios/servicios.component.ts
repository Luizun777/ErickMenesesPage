import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  serviciosList: any = [
    {
      id: 1,
      nombre: 'DISEÑO GRÁFICO',
      img: 'assets/img/prodcutos/imagen0.png',
      precio: 500000,
      desc: 'Folletos y Catálogos - Anuncios para prensa - Material gráfico y diseño gráfico para profesionales y empresas - Presentaciones'
    },
    {
      id: 2,
      nombre: 'DESARROLLO WEB',
      img: 'assets/img/prodcutos/imagen1.png',
      precio: 800000,
      desc: 'Desarrollo de páginas web - Landing pages - Plataformas web'
    },
    {
      id: 3,
      nombre: 'DESARROLLO MOVIL',
      img: 'assets/img/prodcutos/imagen2.png',
      precio: 900000,
      desc: 'Desarrollo de Aplicaciones móviles ANDROID - iOS.'
    },
    {
      id: 4,
      nombre: 'DISEÑO UX/UI',
      img: 'assets/img/prodcutos/imagen3.png',
      precio: 600000,
      desc: 'Diseño de prototipos UX/UI Plataformas web - Aplicaciones Móviles.'
    },
    {
      id: 5,
      nombre: 'MARKETING DIGITAL',
      img: 'assets/img/prodcutos/imagen4.png',
      precio: 800000,
      desc: 'Creación de contenido para redes sociales. Facebook - Instagram - LinkIn - Twitter'
    },
    {
      id: 6,
      nombre: 'DESARROLLO DE JUEGOS',
      img: 'assets/img/prodcutos/imagen5.png',
      precio: 1000000,
      desc: 'DESARROLLO DE JUEGOS'
    },
    {
      id: 7,
      nombre: 'MATERIAL DE EVENTOS',
      img: 'assets/img/prodcutos/imagen6.png',
      precio: 300000,
      desc: 'Cartelería - Roll-ups y material gráfico para eventos - Folletos y catálogos - Camisetas y material publicitario'
    },
    {
      id: 8,
      nombre: 'DISEÑO DE MARCA',
      img: 'assets/img/prodcutos/imagen7.png',
      precio: 400000,
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

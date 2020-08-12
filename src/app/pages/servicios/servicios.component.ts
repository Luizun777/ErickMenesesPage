import { Component, OnInit } from '@angular/core';

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
      desc: 'Folletos y Catálogos - Anuncios para prensa - Material gráfico y diseño gráfico para profesionales y empresas - Presentaciones'
    },
    {
      id: 2,
      nombre: 'DESARROLLO WEB',
      img: 'assets/img/prodcutos/imagen1.png',
      desc: 'Desarrollo de páginas web - Landing pages - Plataformas web'
    },
    {
      id: 3,
      nombre: 'DESARROLLO MOVIL',
      img: 'assets/img/prodcutos/imagen2.png',
      desc: 'Desarrollo de Aplicaciones móviles ANDROID - iOS.'
    },
    {
      id: 4,
      nombre: 'DISEÑO UX/UI',
      img: 'assets/img/prodcutos/imagen3.png',
      desc: 'Diseño de prototipos UX/UI Plataformas web - Aplicaciones Móviles.'
    },
    {
      id: 5,
      nombre: 'MARKETING DIGITAL',
      img: 'assets/img/prodcutos/imagen4.png',
      desc: 'Creación de contenido para redes sociales. Facebook - Instagram - LinkIn - Twitter'
    },
    {
      id: 6,
      nombre: 'DESARROLLO DE JUEGOS',
      img: 'assets/img/prodcutos/imagen5.png',
      desc: 'DESARROLLO DE JUEGOS'
    },
    {
      id: 7,
      nombre: 'MATERIAL DE EVENTOS',
      img: 'assets/img/prodcutos/imagen6.png',
      desc: 'Cartelería - Roll-ups y material gráfico para eventos - Folletos y catálogos - Camisetas y material publicitario'
    },
    {
      id: 8,
      nombre: 'DISEÑO DE MARCA',
      img: 'assets/img/prodcutos/imagen7.png',
      desc: 'Diseño de marca personal - Diseño de web y/o blog - Papelería personal y material gráfico para profesionales - Asesoramiento'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

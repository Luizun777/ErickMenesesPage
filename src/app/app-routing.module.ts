import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Informacion',
    component: InformacionComponent
  },
  {
    path: 'Contacto',
    component: ContactoComponent
  },
  {
    path: 'Servicios',
    component: ServiciosComponent
  },
  {
    path: 'Carrito',
    component: CarritoComponent
  },
  {
    path: '**',
    redirectTo: 'Inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

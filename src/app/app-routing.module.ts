import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { InicioComponent } from './pages/inicio/inicio.component';
// import { InformacionComponent } from './pages/informacion/informacion.component';
// import { ContactoComponent } from './pages/contacto/contacto.component';
// import { ServiciosComponent } from './pages/servicios/servicios.component';
// import { CarritoComponent } from './pages/carrito/carrito.component';

import { InicioRopaComponent } from './page-ropa/inicio-ropa/inicio-ropa.component';
import { InfoRopaComponent } from './page-ropa/info-ropa/info-ropa.component';
import { ProductoRopaComponent } from './page-ropa/producto-ropa/producto-ropa.component';
import { SucursalRopaComponent } from './page-ropa/sucursal-ropa/sucursal-ropa.component';
import { CarritoRopaComponent } from './page-ropa/carrito-ropa/carrito-ropa.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioRopaComponent
  },
  {
    path: 'Informacion',
    component: InfoRopaComponent
  },
  {
    path: 'Productos',
    component: ProductoRopaComponent
  },
  {
    path: 'Sucursal',
    component: SucursalRopaComponent
  },
  // {
  //   path: 'Informacion',
  //   component: InformacionComponent
  // },
  // {
  //   path: 'Contacto',
  //   component: ContactoComponent
  // },
  // {
  //   path: 'Servicios',
  //   component: ServiciosComponent
  // },
  {
    path: 'Carrito',
    component: CarritoRopaComponent
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

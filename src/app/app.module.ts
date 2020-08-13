import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioRopaComponent } from './page-ropa/inicio-ropa/inicio-ropa.component';
import { InfoRopaComponent } from './page-ropa/info-ropa/info-ropa.component';
import { ProductoRopaComponent } from './page-ropa/producto-ropa/producto-ropa.component';
import { SucursalRopaComponent } from './page-ropa/sucursal-ropa/sucursal-ropa.component';
import { CarritoRopaComponent } from './page-ropa/carrito-ropa/carrito-ropa.component';
import { HeaderRopaComponent } from './shared/header-ropa/header-ropa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    InformacionComponent,
    ServiciosComponent,
    ContactoComponent,
    CarritoComponent,
    InicioRopaComponent,
    InfoRopaComponent,
    ProductoRopaComponent,
    SucursalRopaComponent,
    CarritoRopaComponent,
    HeaderRopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

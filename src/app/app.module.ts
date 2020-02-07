import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { CallbackComponent } from './componentes/callback/callback.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContactoComponent,
    IngresarComponent,
    ServiciosComponent,
    ProductosComponent,
    UbicacionComponent,
    CallbackComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

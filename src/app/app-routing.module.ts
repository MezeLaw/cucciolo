import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';


const routes: Routes = [
  { path: "inicio", component: HeaderComponent},
  { path: "contacto", component: ContactoComponent},
  { path: "ingresar", component: IngresarComponent},
  { path: "servicios", component: ServiciosComponent},
  { path: "productos", component: ProductosComponent },
  { path: "ubicacion", component: UbicacionComponent},
  { path: "**", component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

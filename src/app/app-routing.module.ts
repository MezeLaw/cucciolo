import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { AuthService } from './servicios/auth.service';
import { CallbackComponent } from './componentes/callback/callback.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { AuthGuard } from './servicios/auth.guard';


const routes: Routes = [
  { path: "inicio", component: HeaderComponent},
  { path: "contacto", component: ContactoComponent},
  { path: "ingresar", component: IngresarComponent},
  { path: "servicios", component: ServiciosComponent},
  { path: "productos", component: ProductosComponent, canActivate:[AuthGuard]},
  { path: "ubicacion", component: UbicacionComponent, canActivate:[AuthGuard]},
  { path: "perfil", component: PerfilUsuarioComponent, canActivate:[AuthGuard]},
  { path: "**", component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

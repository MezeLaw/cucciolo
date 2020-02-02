import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "inicio", component: HeaderComponent},
  { path: "contacto", component: ContactoComponent},
  { path: "**", component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

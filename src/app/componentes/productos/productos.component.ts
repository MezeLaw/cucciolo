import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];

  constructor( productosService:ProductosService, public auth:AuthService ) {
    this.productos = productosService.getProductos();
   }

  ngOnInit() {
  }

}

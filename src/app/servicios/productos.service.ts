import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

 productos:Producto[] = [];

  constructor() { 
    

    this.productos = [

        { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/81ks8yWZz3L._AC_SX425_.jpg",
          categoria: "Alimento",
          descripcion: "Alimento para perro.",
          animal: "Perro" },

          { nombre:"Pro Plan 15kg",
          fabricante:"Purina",
          precio: 2400,
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/81H30BW8SPL._AC_SX679_.jpg",
          categoria: "Alimento",
          descripcion: "Alimento para perro.",
          animal: "Perro" },

          { nombre:"Pro Plan 5kg",
          fabricante:"Purina",
          precio: 1540,
          imgUrl:"//d34zlyc2cp9zm7.cloudfront.net/products/cad32579a3f79e49f5fbedd882228fc58084be962824ff39918c6cea8ae21a02.webp_500",
          categoria: "Alimento",
          descripcion: "Alimento para perro.",
          animal: "Perro" },


          { nombre:"Pro Plan 30kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/81HmiLLkHJL._AC_SL1500_.jpg",
          categoria: "Alimento",
          descripcion: "Alimento para gato.",
          animal: "Gato" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2000,
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71Ec3KtvNvL._AC_SL1500_.jpg",
          categoria: "Alimento",
          descripcion: "Alimento para gato.",
          animal: "Gato" },


          { nombre:"Pro Plan 15kg",
          fabricante:"Purina",
          precio: 1400,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          descripcion: "Alimento para gato.",
          animal: "Gato" }

    ];

  }


  getProductos(){
    return this.productos;
  }

}


export interface Producto {
  
  nombre: string;
  fabricante: string;
  precio:number;
  imgUrl:string;
  categoria: string; 
  descripcion:string;
  animal?:string;
}
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
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },

          { nombre:"Pro Plan 15kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },

          { nombre:"Pro Plan 5kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" },


          { nombre:"Pro Plan 20kg",
          fabricante:"Purina",
          precio: 2600,
          imgUrl:"https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/pro-plan-adult-complete-razas-medianas_143",
          categoria: "Alimento",
          animal: "Perro" }




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
  animal?:string;
}
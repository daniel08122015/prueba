import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './interface/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { 

    console.log("sevicio productos");
  }


  url='https://pokeapi.co/api/v2/pokemon/ditto';

  getProductos(){
    //return this.http.get<[Producto]>(this.url);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');

    //return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }



}

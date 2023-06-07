import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from './model/Producto';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  data : any;

  constructor(private http:HttpClient) { 
  }


  url='https://pokeapi.co/api/v2/pokemon';



  getPokemon(index:number) {
    return this.http.get(`${this.url}/${index}/`);
  }

  buscarPokemons(termino:string) {
    return this.http.get(`${this.url}/${termino}/`);
  }




}

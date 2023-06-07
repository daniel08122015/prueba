import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/producto.service';


@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})

export class ListProductoComponent {

  data: any[]=[];
  //dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

    constructor ( private servicioProducto: ProductoService ) {
   
    }

    ngOnInit(){
     this.getPokemons();
    }

  async getPokemons(){
    let pokemonData;

    for (let i = 1; i <= 150; i++) {

     await this.servicioProducto.getPokemon(i).subscribe(
        (resp:any) => {
          console.log(resp);
          pokemonData = {
            position: i,
            image: resp.sprites.front_default,
            name: resp.name
          };
          this.data.push(pokemonData);
          // this.dataSource = new MatTableDataSource<any>(this.data);
          // this.dataSource.paginator = this.paginator;
        },
        err=>{
          console.log(err);
        }
      )
      
    }
  }

  async buscarPokemon(termino: string){

    this.data = [];
    let pokemonData2;

    console.log(termino);

    await this.servicioProducto.buscarPokemons(termino).subscribe(
      (resp:any) => {
        console.log(resp);
        pokemonData2 = {
          //position: i,
          image: resp.sprites.front_default,
          name: resp.name
        };
        this.data.push(pokemonData2);
        // this.dataSource = new MatTableDataSource<any>(this.data);
        // this.dataSource.paginator = this.paginator;
      },
      err=>{
        console.log(err);
      }
    )
  }



}

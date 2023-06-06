import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProductoService } from 'src/app/producto.service';


@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent {


    productos: any[] = [];

    form = new FormGroup({
      name: new FormControl(''),
    });

    constructor ( private servicioProducto: ProductoService ) {
   
    }

    ngOnInit(){
      this.obtenerProducto();
    }
    
    async obtenerProducto(){
       await this.servicioProducto.getProductos().subscribe( (data:any) => {
       console.log(data);
       this.productos = data.results;
      })
    }

    onSubmit(): void{
      console.log(this.form.value);
    }
}

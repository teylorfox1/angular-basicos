import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
     // arreglo de string
    heroes: string [] = ['spiderman','ironman','hulk','thor','capitan america','batman'];
    heroeBorrado: string = '' ;
    borrarHeroe(){
         
        //const heroeBorrado = this.heroes.shift();
        this.heroeBorrado = this.heroes.shift() || '';
    }

}

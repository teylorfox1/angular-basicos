
// decaorador 

import { Component } from "@angular/core";

@Component ({
      selector: 'app-contador',
      template: `
      <!-- <h1> holaaaaa mundoooodododod</h1> -->

            <h1> {{titulo}}</h1> 
            <h3>la base es :<strong> {{base}} </strong></h3>

            <!-- <button (click)="sumar()"> +1 </button> -->
            <button (click)="acumular(base);"> {{base}} </button>

            <span>{{ numero }}</span>

            <!-- <button (click)="restar()"> -1 </button> -->
            <button (click)="acumular(-base) "> - {{base}} </button>
      
      `
})

export class ContadorComponent {

      titulo: string = 'bases-01'; 
      numero: number = 10 ;
      base  : number =5;
    
    //crear un metodo sumar
     acumular(valor: number){
              this.numero += valor;
            }

}

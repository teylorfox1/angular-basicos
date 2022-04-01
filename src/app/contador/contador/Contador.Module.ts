import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule( {
    declarations: [
          ContadorComponent
    ],
    exports: [
         ContadorComponent
    ]
    

})

// se crea la clase nueva para este modulo - class contadorModule
export class contadorModule { }


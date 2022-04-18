import { Injectable } from "@angular/core";
import { Personaje } from '../intefaces/dbz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';

@Injectable()
export class DbzService {


    private _personajes : Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];

      //metodo que lo retorne [...this._personajes]; parte de javascrip

      get personajes(): Personaje[]{

          return [...this._personajes];
      }

    constructor(){}

     //crear metodo
    agregarPersonaje(personaje: Personaje){
       this._personajes.push(personaje);

    }
}
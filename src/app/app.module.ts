import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ContadorComponent } from './contador/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador/Contador.Module';
import { DBZModule } from './dbz/dbz.module';
// import { PersonajesComponent } from './dbz/personajes/personajes.component';



@NgModule({
  declarations: [
    AppComponent,
    // PersonajesComponent
    //ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    contadorModule,
    DBZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

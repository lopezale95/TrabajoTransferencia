import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { MarioComponent } from './mario/mario.component';
import { Siete_AlmasComponent } from './siete_Almas/siete_Almas.component';
import { WalleComponent } from './walle/walle.component';
import { Busca_FelicidadComponent } from './busca_Felicidad/busca_Felicidad.component';
import { PerfumeComponent } from './Perfume/Perfume.component';
import { InterestelarComponent } from './Interestelar/Interestelar.component';
import { El_Castillo_AmbulanteComponent } from './El_Castillo_Ambulante/El_Castillo_Ambulante.component';
import { Cloud_AtlasComponent } from './Cloud_Atlas/Cloud_Atlas.component';
import { ExpresoComponent } from './Expreso/Expreso.component';




@NgModule({
  declarations: [								
      AppComponent, 
      PeliculaComponent,
      MarioComponent,
      Siete_AlmasComponent,
      WalleComponent,
      Busca_FelicidadComponent,
      PerfumeComponent,
      InterestelarComponent,
      El_Castillo_AmbulanteComponent,
      Cloud_AtlasComponent,
      ExpresoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

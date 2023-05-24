import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";

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
import { PostsComponent } from './posts/posts.component';


const routes: Route[] =[
  {path: "pelicula", component: PeliculaComponent},
  {path: "mario", component: MarioComponent},
  {path: "siete_almas", component: Siete_AlmasComponent},
  {path: "walle", component: WalleComponent},
  {path: "busca_felicidad", component: Busca_FelicidadComponent},
  {path: "perfume", component: PerfumeComponent},
  {path: "Interestelar", component: InterestelarComponent},
  {path: "El_Castillo_Ambulante", component: El_Castillo_AmbulanteComponent},
  {path: "cloud_Atlas", component: Cloud_AtlasComponent},
  {path: "Expreso", component: ExpresoComponent},
  {path: "**", redirectTo:"inicio"},


];


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
      ExpresoComponent,
      PostsComponent,
   ],
  imports: [BrowserModule,FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

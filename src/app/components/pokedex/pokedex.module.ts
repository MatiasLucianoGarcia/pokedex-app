import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { PokedexComponent } from './pokedex.component';



@NgModule({
  declarations: [
    PokedexScreenComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokedexComponent,
    PokedexScreenComponent
  ]
})
export class PokedexModule { }

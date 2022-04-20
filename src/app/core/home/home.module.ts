import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PokedexModule } from '../pokedex/pokedex.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PokedexModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }

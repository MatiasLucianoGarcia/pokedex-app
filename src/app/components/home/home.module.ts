import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PokedexModule } from '../pokedex/pokedex.module';
import { SliderModule } from '../slider/slider.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PokedexModule,
    SliderModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }

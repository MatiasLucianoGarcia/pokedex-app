import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderCardComponent } from './slider-card/slider-card.component' 


@NgModule({
  declarations: [SliderCardComponent,SliderComponent],
  imports: [
    CommonModule
  ],
  exports:[SliderComponent,SliderCardComponent]
})
export class SliderModule { }

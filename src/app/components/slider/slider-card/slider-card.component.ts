import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { SharingPokemonService } from 'src/app/services/pokemon/sharing-pokemon.service';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  constructor(private sharingPokemonService:SharingPokemonService) {}

  ngOnInit(): void {}

  sharePokemon(){
    this.sharingPokemonService.saringPokemonObservableData=this.pokemon;
  }
}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public pokemons!: Pokemon[];
  public limit: number = 5;
  public offset: number = 0;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemonPage(this.limit, this.offset).subscribe(
      (res) => (this.pokemons = res),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}

  prevPokemonList():void {
    if (this.offset != 0) {
      this.offset = this.offset - 5;
      this.pokemonService.getPokemonPage(this.limit, this.offset).subscribe(
        (res) => (this.pokemons = res),
        (err) => console.log(err)
      );
    }
  }

  nextPokemonList():void {
    this.offset = this.offset + 5;
      this.pokemonService.getPokemonPage(this.limit, this.offset).subscribe(
        (res) => (this.pokemons = res),
        (err) => console.log(err)
      );
  }
}

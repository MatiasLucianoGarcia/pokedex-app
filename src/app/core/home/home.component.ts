import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public myPokemon!:Pokemon;

  constructor(private _pokemonService:PokemonService) {}

  ngOnInit(): void {
    const observable:Observable<Pokemon> = this._pokemonService.getPokemonById(1).pipe();
    observable.subscribe(
      response => {
        console.log(response);
        this.myPokemon = response;
      },
      error=>{
        console.log(error);
      }
    )
  }

}

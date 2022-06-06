import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { SharingPokemonService } from 'src/app/services/pokemon/sharing-pokemon.service';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.scss']
})
export class PokedexScreenComponent implements OnInit {
  
  public myPokemon!:Pokemon;

  constructor(private sharingPokemonService:SharingPokemonService) { }

  ngOnInit(): void {
    this.sharingPokemonService.sharingPokemonObservable.subscribe(
      res=>{
        this.myPokemon=res;
        console.log(res.name);
      },
      error=>{
        console.log(error)
      }
    )
  }

}

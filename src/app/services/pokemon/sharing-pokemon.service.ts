import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemon';
import { Type } from 'src/app/domain/type';

@Injectable({
  providedIn: 'root',
})
export class SharingPokemonService {
  private pokemonObservable: BehaviorSubject<Pokemon> =
    new BehaviorSubject<Pokemon>(
      new Pokemon('', '', 0, 0, new Type(''), [], [])
    );

  get sharingPokemonObservable() {
    return this.pokemonObservable.asObservable();
  }
  set saringPokemonObservableData(data: Pokemon) {
    this.pokemonObservable.next(data);
  }
}

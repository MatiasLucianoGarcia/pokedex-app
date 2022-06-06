import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonAdapter } from 'src/app/adapters/pokemon-adapter';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = `${environment.baseUrl}pokemon`;

  constructor(private _http: HttpClient, private adapter: PokemonAdapter) {}

  public getPokemonById(id: number): Observable<Pokemon> {
    return this._http
      .get(`${this.url}/${id}`)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this._http
      .get(`${this.url}/${name}`)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }

  public getPokemonPage(limit: number, offset: number): Observable<Pokemon[]> {
    return this._http.get(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      map((data: any) => {
        let pokemons: Pokemon[] = [];
        data.results.forEach((element: any, index: number) => {
          this.getPokemonByName(element.name).subscribe(
            (res) => {
              pokemons[index] = res;
            },
            (error) => {
              console.log(error);
            }
          );
        });
        return pokemons;
      })
    );
  }
}

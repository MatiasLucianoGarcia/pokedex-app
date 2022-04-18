import { Type } from "../domain/type";
import { Pokemon } from "../domain/pokemon";
import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class PokemonAdapter implements Adapter<Pokemon>{
    adapt(item:any){
        console.log(item.types);
        return new Pokemon(
            item.name,
            item.sprites.front_default,
            item.height,
            item.weight,
            new Type(item.types[0].type.name),
            [],
            []);
    }
}
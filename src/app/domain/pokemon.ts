import { Ability } from "./ability";
import { Move } from "./move";
import { Type } from "./type";

export class Pokemon{
    constructor(
        public name: string,
        public image: string,
        public height:number,
        public weight:number,
        public type: Type,
        public moves: Move[],
        public abilities:Ability[]){}
}


import { NamedAPIResource } from "./NamedAPIResource";

export interface PokemonMove {
    /** The move the Pokémon can learn */
    move: NamedAPIResource;
}
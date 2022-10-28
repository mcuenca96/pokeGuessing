import { PokemonSlice } from "store/pokemonSlice"

export type GenerationSelectorProps = {
    generations: PokemonSlice['generations']
    onClick: (generation: PokemonSlice['generations'][number]) => void
}
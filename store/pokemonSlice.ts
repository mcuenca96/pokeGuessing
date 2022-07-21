import { StateCreator } from "zustand";
import { Pokemon } from "@models";
import C from "@common/constants";
import { ALL } from "dns";

const { POKEMONS_PER_GENERATION } = C;

export interface PokemonSlice {
  currentPokemon?: Pokemon;
  generations: Array<keyof typeof POKEMONS_PER_GENERATION>;
  setCurrentPokemon: (newPokemon: Pokemon) => void;
  setCurrentGenerations: (
    generation: keyof typeof POKEMONS_PER_GENERATION
  ) => void;
}

const createPokemonSlice: StateCreator<PokemonSlice> = (set) => ({
  currentPokemon: undefined,
  generations: [2, 3, 4, 5],
  setCurrentPokemon: (newPokemon) =>
    set(() => ({ currentPokemon: newPokemon })),
  setCurrentGenerations: (generation) =>
    set((state) => ({
      generations: state.generations.includes(generation)
        ? state.generations.filter(
            (currentGeneration) => currentGeneration !== generation
          )
        : [...state.generations, generation].sort(),
    })),
});

export default createPokemonSlice;

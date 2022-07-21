import { StateCreator } from 'zustand'
import { Pokemon } from '@models'

export interface PokemonSlice {
    currentPokemon?: Pokemon,
    setCurrentPokemon: (newPokemon: Pokemon) => void,
}

const createPokemonSlice: StateCreator<PokemonSlice> = (set) => ({
    currentPokemon: undefined,
    setCurrentPokemon: (newPokemon) => set(() => ({currentPokemon: newPokemon }))
})

export default createPokemonSlice
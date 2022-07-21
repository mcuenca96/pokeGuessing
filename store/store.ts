import create from 'zustand'
import createPokemonSlice, { PokemonSlice} from './pokemonSlice'
import createTextInputSlice, { TextInputSlice} from './textInputSlice'



const useStore = create<PokemonSlice & TextInputSlice>()((...a) => ({
    ...createPokemonSlice(...a),
    ...createTextInputSlice(...a),
}))

export default useStore
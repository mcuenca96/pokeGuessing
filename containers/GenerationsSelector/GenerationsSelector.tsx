import useStore from "store/store"
import { PokemonSlice } from "store/pokemonSlice"
import GenerationsSelectorComponent from "@components/GenerationsSelector";

const GenerationsSelector = () => {

    const { generations,setCurrentGenerations } = useStore()

    const onSelectGeneration = (generation: 1 | 2 | 3 | 4 | 5) => {
        setCurrentGenerations(generation)
    }
    return <GenerationsSelectorComponent generations={generations} onClick={onSelectGeneration}/>
}

export default GenerationsSelector
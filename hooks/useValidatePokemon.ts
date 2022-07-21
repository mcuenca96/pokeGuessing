import useStore from "@store"

const useValidatePokemon = () => {
   const { currentPokemon, inputText} = useStore()
    return currentPokemon?.name === inputText
}

export default useValidatePokemon
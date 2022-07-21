import useStore from "@store";
import { useEffect } from "react";


const POKEMONS_PER_GENERATION = {
    1: 151,
    2: 251,
    3: 386,
    4: 493,
    5: 649,
  };

const useGetPokemon = (hasGuessedIt: boolean) => {
    const { currentPokemon, setCurrentPokemon, setInputText } = useStore();

    useEffect(() => {
      const getNewPokemon = () => {
        const firstGenerationRandomPokemonId =
          Math.floor(Math.random() * POKEMONS_PER_GENERATION[1]) + 1;
        fetch(
          `${process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL}pokemon/${firstGenerationRandomPokemonId}`
        )
          .then(async (response) => {
            const pokemonData = await response.json();
            setCurrentPokemon(pokemonData);
          })
          .catch((error) => console.error(error));
      }
      if(hasGuessedIt){
        setTimeout(() => {
          setInputText('')
          getNewPokemon()
        }, 3000)
      }
      else {
        getNewPokemon()
      }
    }, [hasGuessedIt, setCurrentPokemon, setInputText]);

    return currentPokemon
}

export default useGetPokemon
import { useEffect, useCallback } from "react";
import useStore from "@store";
import C from "@common/constants";
import { getRandomPokemonId } from "@utils";

const { POKEMONS_PER_GENERATION, HAS_GUESSED_IT_TIMEOUT } = C;

const useGetPokemon = (hasGuessedIt: boolean) => {
  const { currentPokemon, generations, setCurrentPokemon, setInputText } =
    useStore();

  const getNewPokemon = useCallback(() => {
    const randomGenerationsPokemonId = getRandomPokemonId(generations);
    fetch(
      `${process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL}pokemon/${randomGenerationsPokemonId}`
    )
      .then(async (response) => {
        const pokemonData = await response.json();
        setCurrentPokemon(pokemonData);
      })
      .catch((error) => console.error(error));
  }, [generations, setCurrentPokemon]);

  useEffect(() => {
    if (hasGuessedIt) {
      setTimeout(() => {
        setInputText("");
        getNewPokemon();
      }, HAS_GUESSED_IT_TIMEOUT);
    }
  }, [getNewPokemon, hasGuessedIt, setInputText]);

  useEffect(() => {
    getNewPokemon();
  }, [getNewPokemon]);

  return currentPokemon;
};

export default useGetPokemon;

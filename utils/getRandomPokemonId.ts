import C from "@common/constants";

const { POKEMONS_PER_GENERATION } = C;

const getRandomPokemonId = (
  generations: Array<keyof typeof POKEMONS_PER_GENERATION>
) => {
  const olderGeneration = Math.min(...generations);
  const newerGeneration = Math.max(...generations);

  const maxId =
    POKEMONS_PER_GENERATION[
      newerGeneration as keyof typeof POKEMONS_PER_GENERATION
    ];

  const minId =
    olderGeneration === 1
      ? 1
      : POKEMONS_PER_GENERATION[
          (olderGeneration - 1) as keyof typeof POKEMONS_PER_GENERATION
        ] + 1;

  POKEMONS_PER_GENERATION[
    olderGeneration as keyof typeof POKEMONS_PER_GENERATION
  ];

  return Math.floor(Math.random() * (maxId - minId + 1) + minId);
};

export default getRandomPokemonId;

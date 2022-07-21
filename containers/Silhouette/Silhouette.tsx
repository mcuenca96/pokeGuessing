import SilhouetteComponent from "@components/Silhouette";
import { useValidatePokemon, useGetPokemon } from "@hooks";

const Silhouette = () => {
  const hasGuessedIt = useValidatePokemon();
  const currentPokemon = useGetPokemon(hasGuessedIt);

  return (
    <SilhouetteComponent
      sprite={currentPokemon?.sprites.front_default}
      hidden={!hasGuessedIt}
    />
  );
};

export default Silhouette;

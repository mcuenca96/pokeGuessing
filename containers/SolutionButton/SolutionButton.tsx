import { debounce } from "utils";
import useStore from "@store";
import SolutionButtonComponent from "@components/SolutionButton";

const SolutionButton = () => {
  const { currentPokemon, setInputText } = useStore();

  const handleClick = () => {
    if (currentPokemon) {
      setInputText(currentPokemon?.name);
    }
  };

  const deboundedHandleClick = debounce(handleClick, 500);

  return <SolutionButtonComponent onClick={deboundedHandleClick} />;
};

export default SolutionButton;

import { SolutionButtonProps } from "./types";

const SolutionButton = ({ onClick }: SolutionButtonProps) => {
  return (
    <button className="p-3 w-full bg-red-400 rounded-lg" onClick={onClick}>
      SHOW THE POKEMON
    </button>
  );
};

export default SolutionButton;

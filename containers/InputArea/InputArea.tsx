import { useCallback, KeyboardEvent } from "react";
import useStore from "@store";
import InputAreaComponent from "@components/InputArea";

const InputArea = () => {
  const { inputText, setInputText } = useStore();

  const handleInputChange = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
    },
    [setInputText]
  );

  return <InputAreaComponent onChange={handleInputChange} value={inputText} />;
};

export default InputArea;

import { InputAreaProps } from "./types";

const InputArea = ({ onChange, value }: InputAreaProps) => {
  return <input onChange={onChange} value={value} />;
};
export default InputArea;

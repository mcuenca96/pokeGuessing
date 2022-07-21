import { InputAreaProps } from "./types";

const InputArea = ({ onChange, value }: InputAreaProps) => {
  return (
    <input
      type="text"
      className="p-3 rounded lowercase"
      onChange={onChange}
      value={value}
    />
  );
};
export default InputArea;

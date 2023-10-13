import { useState } from "react";

export const useCount = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const Increment = () => {
    setValue(value + 1);
  };
  const Decrement = () => {
    setValue(value - 1);
  };
  const Reset = () => {
    setValue(initial);
  };

  return { value, Increment, Decrement, Reset };
};

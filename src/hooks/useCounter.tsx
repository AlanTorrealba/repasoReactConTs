import { useState } from "react";
interface Options {
  initialValue?: number;
}
export const useCounter = ({ initialValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initialValue);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };
  const decreaseBy = (value: number) => {
    const newValue = count - value;

    if (newValue < 0) return;
    setCount(count - value);
  };

  return {
    //Methods
    decreaseBy,
    increaseBy,

    //Propertis
    count,
  };
};

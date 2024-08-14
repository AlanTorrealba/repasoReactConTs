import React from "react";

export const BasicTypes = () => {
  const name: string = "Ant";
  const age: number = 28;
  const isActive: boolean = false;
  const powers: string[] = ["React", "Vue", "Angular"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      <h5>
        {name}
        {age}
      </h5>
      <br />
      {isActive ? true : false} {powers.join(" ")}
    </>
  );
};

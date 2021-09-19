import React from "react";

interface Props {}

const name = "irere";

export const Tips: React.FC<Props> = () => {
  return <h1>Tips{name.toUpperCase()}</h1>;
};

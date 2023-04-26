import React from "react";
import { convertString } from "./convertString";

export const convertText = (node: React.ReactNode): React.ReactNode => {
  if (typeof node === "string") {
    return convertString(node);
  }

  if (Array.isArray(node)) {
    return React.Children.map(node, (child) => convertText(child));
  }

  return node;
};

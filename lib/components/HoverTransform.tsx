import { useState, useEffect, PropsWithChildren } from "react";
import "./hoverTransform.css";
import { convertText } from "../utils/convertText";

const HoverTransform = ({ children }: PropsWithChildren) => {
  const [displayText, setDisplayText] = useState(children);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      setDisplayText(convertText(children));
    } else {
      setDisplayText(children);
    }
  }, [children, hovered]);

  return (
    <div
      className={`hover-transform ${hovered ? "hovered" : ""}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {displayText}
    </div>
  );
};

export default HoverTransform;

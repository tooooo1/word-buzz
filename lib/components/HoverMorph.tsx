import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { convertText } from "../utils/convertText";
import "./hoverMorph.css";

interface HoverMorphProps {
  result: string;
  duration?: number;
}

const HoverMorph = ({
  children,
  result,
  duration = 500,
}: PropsWithChildren<HoverMorphProps>) => {
  const [displayText, setDisplayText] = useState(children);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setDisplayText(convertText(children));
      }, duration / 10);

      timeoutRef.current = setTimeout(() => {
        clearInterval(intervalRef.current!);
        setDisplayText(result);
      }, duration);
    } else {
      setDisplayText(children);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [children, hovered, result, duration]);

  return (
    <div
      className={`hover-morph ${hovered ? "hovered" : ""}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {displayText}
    </div>
  );
};

export default HoverMorph;

import { conversionMap } from "../constants/conversionMap";

export const convertString = (text: string) => {
  const chars = text.split("");
  const availableChars = chars
    .map((char, index) => ({ char, index }))
    .filter(({ char }) =>
      Object.prototype.hasOwnProperty.call(conversionMap, char.toUpperCase())
    )
    .map(({ index }) => index);

  if (availableChars.length > 0) {
    const randomIndex =
      availableChars[Math.floor(Math.random() * availableChars.length)];
    const originalChar = chars[randomIndex].toUpperCase();
    chars[randomIndex] = conversionMap[originalChar];
  }

  return chars.join("");
};

import SpecialColor from "./special-color";

function randomColorGenerator(): SpecialColor {
  const colors = Object.values(SpecialColor);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default randomColorGenerator;

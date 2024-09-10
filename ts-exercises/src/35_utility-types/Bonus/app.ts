import { ISmoothie } from "./interfaces/ISmoothie";

// ##### Utility-Types-TS-Level-3_1
console.log(
  "%c Utility-Types-TS-Level-3_1 ",
  "background: white; color: green"
);

function customizeSmoothie<T extends ISmoothie>(
  basicSmoothie: T,
  customizedSmoothie: Partial<T>
): T {
  return {
    ...basicSmoothie,
    ...customizedSmoothie,
  };
}

const basicSmoothie: ISmoothie = {
  name: "Berry Blast",
  ingredients: ["Raspberrys", "Bananas", "Strawberrys"],
  size: "medium",
  price: 4.5,
};

const customizedSmoothie = customizeSmoothie(basicSmoothie, {
  size: "large",
  price: 5.2,
});

console.log(customizedSmoothie);

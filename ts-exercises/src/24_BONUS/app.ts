import IceCreamParlor from "./classes/IceCreamParlor";

const parlor = new IceCreamParlor(["Vanilla", "Chocolate", "Strawberry"]);

console.log(parlor.listFlavors());
console.log(parlor.orderIceCream("Vanilla", 2));
console.log(parlor.isFlavorAvailable("Mango"));
parlor.addNewFlavor("Mango");
console.log(parlor.isFlavorAvailable("Mango"));
console.log(parlor.orderIceCream("Mango", 3));
parlor.removeFlavor("Chocolate");
console.log(parlor.listFlavors());

function updateFlavorList() {
  const flavorList = document.getElementById("flavorList") as HTMLUListElement;
  flavorList.innerHTML = "";
  const flavors = parlor.listFlavors();
  flavors.forEach((flavor) => {
    const listItem = document.createElement("li");
    listItem.textContent = flavor;
    flavorList.appendChild(listItem);
  });
}

document.getElementById("addFlavorButton")?.addEventListener("click", () => {
  const newFlavorInput = document.getElementById(
    "newFlavor"
  ) as HTMLInputElement;
  const newFlavor = newFlavorInput.value.trim();
  if (newFlavor) {
    parlor.addNewFlavor(newFlavor);
    newFlavorInput.value = "";
    updateFlavorList();
  }
});

document.getElementById("removeFlavorButton")?.addEventListener("click", () => {
  const removeFlavorInput = document.getElementById(
    "removeFlavor"
  ) as HTMLInputElement;
  const removeFlavor = removeFlavorInput.value.trim();
  if (removeFlavor) {
    parlor.removeFlavor(removeFlavor);
    removeFlavorInput.value = "";
    updateFlavorList();
  }
});

document.getElementById("checkFlavorButton")?.addEventListener("click", () => {
  const checkFlavorInput = document.getElementById(
    "checkFlavor"
  ) as HTMLInputElement;
  const checkFlavor = checkFlavorInput.value.trim();
  const resultElement = document.getElementById(
    "checkResult"
  ) as HTMLParagraphElement;

  if (checkFlavor) {
    const isAvailable = parlor.isFlavorAvailable(checkFlavor);
    const price = parlor.getFlavorPrice(checkFlavor);
    if (isAvailable) {
      resultElement.textContent = `The flavor "${checkFlavor}" is available for ${price.toFixed(
        2
      )} Euros.`;
    } else {
      resultElement.textContent = `The flavor "${checkFlavor}" is not available.`;
    }
  }
});

updateFlavorList();

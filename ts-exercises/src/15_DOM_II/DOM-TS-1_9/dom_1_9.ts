// ##### Dom-Elements-TS-Level-1_9
console.log("%c Dom-Elements-TS-Level-1_9 ", "background: white; color: green");

function removeSelectedColor(): void {
  const selectElement = document.getElementById(
    "farbeAuswahlen"
  ) as HTMLSelectElement;
  const selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    selectElement.remove(selectedIndex);
  }
}

const button = document.getElementById("button") as HTMLButtonElement;
if (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    removeSelectedColor();
  });
}

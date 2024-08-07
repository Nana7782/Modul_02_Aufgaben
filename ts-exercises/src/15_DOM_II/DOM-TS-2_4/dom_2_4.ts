function changeBackground(): void {
  const farbeAuswahlen = document.getElementById(
    "farbeAuswahlen"
  ) as HTMLSelectElement;
  const selectedColor = farbeAuswahlen.value.trim();
  selectedColor.toLowerCase();

  document.body.style.backgroundColor = selectedColor;
  console.log(selectedColor);
}

const button = document.getElementById("button") as HTMLButtonElement;
button.addEventListener("click", (event: Event) => {
  event.preventDefault();
  changeBackground();
});

// ! Die Leerzeichen werden nicht gelöscht!? Ich weiß nicht warum :(
// ! und das toLowerCase funktioniert auch nicht

function setSmall(): void {
  console.log("setSmall aufgerufen");
  const element = document.getElementById("element") as HTMLDivElement;
  const h1 = element?.querySelector("h1");

  if (element && h1) {
    element.classList.remove("middle", "big-crazy");
    element.classList.add("small");
    h1.style.color = "#000"; // Textfarbe für Small
  }
}

function setMiddle(): void {
  const element = document.getElementById("element");
  const h1 = element?.querySelector("h1");

  if (element && h1) {
    element.classList.remove("small", "big-crazy");
    element.classList.add("middle");
    h1.style.color = "#007bff"; // Textfarbe für Middle
  }
}

function setBigAndCrazy(): void {
  const element = document.getElementById("element");
  const h1 = element?.querySelector("h1");

  if (element && h1) {
    element.classList.remove("small", "middle");
    element.classList.add("big-crazy");
    h1.style.color = "#ff5733"; // Textfarbe für Big & Crazy
  }
}

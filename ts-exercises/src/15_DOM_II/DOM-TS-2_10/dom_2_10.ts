function setSmall(): void {
  const element = document.getElementById("element") as HTMLDivElement;
  const h2 = element?.querySelector("h2") as HTMLHeadElement;

  if (element && h2) {
    element.classList.remove("middle", "big");
    element.classList.add("small");
    h2.style.color = "green";
  }
  console.log("setSmall aufgerufen");
}

const btnSmall = document.getElementById("btn-small") as HTMLButtonElement;
btnSmall.addEventListener("click", setSmall);

function setMiddle(): void {
  const element = document.getElementById("element") as HTMLDivElement;
  const h2 = element?.querySelector("h2") as HTMLHeadElement;

  if (element && h2) {
    element.classList.remove("small", "big");
    element.classList.add("middle");
    h2.style.color = "green";
  }
  console.log("setMiddle aufgerufen");
}

const btnMiddle = document.getElementById("btn-middle") as HTMLButtonElement;
btnMiddle.addEventListener("click", setMiddle);

function setBig(): void {
  const element = document.getElementById("element") as HTMLDivElement;
  const h2 = element?.querySelector("h2") as HTMLHeadElement;

  if (element && h2) {
    element.classList.remove("small", "middle");
    element.classList.add("big");
    h2.style.color = "green";
    // h2.style.fontSize = "50px";
  }
  console.log("setBig aufgerufen");
}

const btnBig = document.getElementById("btn-big") as HTMLButtonElement;
btnBig.addEventListener("click", setBig);

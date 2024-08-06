// ##### JS-Einführung-DOM-Level-1_5
console.log(
  "%c JS-Einführung-DOM-Level-1_5 ",
  "background: white; color: green"
);

function showURL(): void {
  const currentUrl: string = window.location.href;

  const urlDisplay: HTMLParagraphElement = document.createElement("p");
  urlDisplay.textContent = `Aktuelle URL: ${currentUrl}`;

  const urlDiv = document.getElementById("url-container") as HTMLDivElement;

  urlDiv.appendChild(urlDisplay);
}

document.getElementById("urlBtn")?.addEventListener("click", showURL);

// ##### DOM-Elements-TS-Level-2_3
console.log("%c DOM-Elements-TS-Level-2_3 ", "background: white; color: green");

const buttonColors: { [key: string]: string } = {
  home: "#f6c89f",
  news: "#ffe7d1",
  contact: "#4b8e8d",
};

function changeColors(): void {
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    const buttonId = buttons[i].id;

    if (buttonColors[buttonId]) {
      buttons[i].style.backgroundColor = buttonColors[buttonId];
    }
  }
}

document.getElementById("change")!.addEventListener("click", changeColors);

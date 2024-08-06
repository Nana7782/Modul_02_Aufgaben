// ##### DOM-Elements-TS-Level-1_1
console.log("%c DOM-Elements-Level-1_1 ", "background: white; color: green");

function addItemToList(): void {
  const inputElement = document.getElementById("inputText") as HTMLInputElement;
  const listElement = document.getElementById("myList") as HTMLUListElement;

  const newItemText = inputElement.value;

  if (newItemText) {
    const listItem = document.createElement("li");
    listItem.textContent = newItemText.trim();
    listElement.appendChild(listItem);
    inputElement.value = "";
  } else {
    console.log("Du hast nichts angegeben");
  }
}

const buttonElement = document.getElementById("input-btn") as HTMLButtonElement;
buttonElement.addEventListener("click", addItemToList);

// ##### DOM-TS-Level-1_2
console.log("%c DOM-TS-Level-1_2 ", "background: white; color: green");

const divElement = document.getElementById("info") as HTMLDivElement;

const eineHeadline = document.createElement("h1") as HTMLHeadElement;
eineHeadline.innerText = "Hello World";
divElement.appendChild(eineHeadline);

const eineSubHeadline = document.createElement("h2") as HTMLHeadElement;
eineSubHeadline.innerText = "How are you?";
divElement.appendChild(eineSubHeadline);

const container = document.createElement("div") as HTMLDivElement;
container.innerHTML = "<p>This is a paragraph</p>";
divElement.appendChild(container);

const newInput = document.createElement("input") as HTMLInputElement;
newInput.setAttribute("type", "text");
newInput.setAttribute("placeholder", "ich bin das neue Inputelement");
newInput.style.width = "200px";
container.appendChild(newInput);

// ##### DOM-TS-Level-1_3
console.log("%c DOM-TS-Level-1_3 ", "background: white; color: green");

const galleryElement = document.getElementById("gallery") as HTMLElement;

const figCaption: string[] = ["Fig.1", "Fig.2", "Fig.3"];
figCaption.forEach((caption) => {
  const figureElement = document.createElement("figure") as HTMLElement;
  figureElement.innerHTML = `<img src='https://picsum.photos/seed/picsum/200/200'> <figcaption>${caption}</figcaption>`;
  galleryElement.appendChild(figureElement);
});

// ##### DOM-TS-Level-1_4
console.log("%c DOM-TS-Level-1_4 ", "background: white; color: green");

function addTextWithTimestamp(): void {
  const textInputElement = document.getElementById(
    "textInput"
  ) as HTMLInputElement;
  const textOutputElement = document.getElementById("output") as HTMLElement;

  const userInput = textInputElement.value;

  const currentDate = new Date();
  const currentTime = currentDate.toLocaleString();

  textOutputElement.innerHTML += `<p>${userInput} - ${currentTime}</p>`;
}

const textBtn = document.getElementById("text-button") as HTMLButtonElement;
if (textBtn) {
  textBtn.addEventListener("click", addTextWithTimestamp);
}

// ##### DOM-Elements-TS-Level-1_2
console.log("%c DOM-Elements-Level-1_2 ", "background: white; color: green");

function changeBackgroundColor(): void {
  const elements = document.getElementsByClassName("example");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    if (element.style.backgroundColor === "black") {
      element.style.backgroundColor = "";
    } else {
      element.style.backgroundColor = "black";
    }
  }
}

const button = document.getElementById("color-button") as HTMLButtonElement;
if (button) {
  button.addEventListener("click", changeBackgroundColor);
}

// ##### BOM-TS-Level-1_1
console.log("%c BOM-TS-Level-1_1 ", "background: white; color: green");

function showTextAfterSeconds(text: string, seconds: number): void {
  setTimeout(() => {
    console.log(text);
  }, seconds * 1000);
}

function displayCountdown(): void {
  const messages: (string | number)[] = [
    "Start: Du hast 3 Sekunden Zeit!",
    10,
    9,
    "Erledigt, du hast 3 Sekunden verschwendet!",
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    "Endlich Feierabend!",
  ];

  let count = 0;

  const intervalId = setInterval(() => {
    if (count < messages.length) {
      console.log(messages[count]);
      count++;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

showTextAfterSeconds("All things serve the beam", 19);
displayCountdown();

// ##### BOM-TS-Level-1_2
console.log("%c BOM-TS-Level-1_2 ", "background: white; color: green");

function startCountdown(): void {
  const zeitElmt = document.querySelector(".zeit") as HTMLDivElement;

  let timeleft = 100;
  let intervalId = setInterval(() => {
    if (timeleft > 0) {
      timeleft--;
      zeitElmt.textContent = `${timeleft}%`;
    } else {
      clearInterval(intervalId);
    }
  }, 100);
}

const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click", startCountdown);

// ##### BOM-TS-Level-1_3
console.log("%c BOM-TS-Level-1_3 ", "background: white; color: green");

// was für eine kack aufgabe

function getBrowserInfo(): void {
  const browserName = navigator.userAgent;
  const architecture = navigator.platform;
  const browserVersion = navigator.appVersion;
  const windowWidth = window.screen.width;
  const windowHeight = window.screen.height;
  const documentWidth = window.innerWidth;
  const documentHeight = window.innerHeight;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;

  const infoHtml = `
        <p>Browsername: ${browserName}</p>
        <p>Betriebssystem-Architektur: ${architecture}</p>
        <p>Browser-Version: ${browserVersion}</p>
        <p>Window Auflösung: ${windowWidth} x ${windowHeight}px </p>
         <p>Innenhöhe und -breite des Dokuments: ${documentWidth} x ${documentHeight} px</p>
        <p>Color Depth:</strong> ${colorDepth} px</p>
        <p>Pixel Depth:</strong> ${pixelDepth} px</p>
    `;

  const infoDiv = document.getElementById("browser-info");
  if (infoDiv) {
    infoDiv.innerHTML = infoHtml;
  }
}

document
  .getElementById("browserInfoBtn")
  ?.addEventListener("click", getBrowserInfo);

// ##### BOM-TS-Level-2_1
console.log("%c BOM-TS-Level-2_1 ", "background: white; color: green");

function startNewCountdown() {
  let countdownValue: number = 10;
  const countdownElmt = document.getElementById("count");

  if (countdownElmt) {
    const intervalId = setInterval(() => {
      countdownElmt.innerText = countdownValue.toString();

      if (countdownValue <= 0) {
        clearInterval(intervalId);
        const messageElement = document.getElementById(
          "msg"
        ) as HTMLParagraphElement;
        messageElement.style.display = "none";
        countdownElmt.style.display = "none";
      } else {
        countdownValue--;
      }
    }, 1000);
  }
}
window.onload = startNewCountdown;

// ##### Dom-Elements-TS-Level-2_2
console.log("%c Dom-Elements-TS-Level-2_2 ", "background: white; color: green");

type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

const submitForm = document.getElementById("form1") as HTMLFormElement;
submitForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const vorname = (document.getElementById("vorname") as HTMLInputElement)
    .value;

  const nachname = (document.getElementById("nachname") as HTMLInputElement)
    .value;

  const land = (document.getElementById("land") as HTMLSelectElement).value;

  const person: SimplePerson = {
    vorname: vorname,
    nachname: nachname,
    land: land,
  };
  console.log(person);
});

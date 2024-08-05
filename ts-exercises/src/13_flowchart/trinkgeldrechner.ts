document.getElementById("berechne")?.addEventListener("click", () => {
  const rechnungsbetrag = Number(
    (<HTMLInputElement>document.getElementById("betrag")).value
  );
  const anzahlTeilnehmer = Number(
    (<HTMLInputElement>document.getElementById("teilnehmer")).value
  );
  const serviceProzent = Number(
    (<HTMLSelectElement>document.getElementById("service")).value
  );

  const trinkgeld = rechnungsbetrag * serviceProzent;
  const gesamtbetrag = rechnungsbetrag + trinkgeld;
  const teilBetrag = gesamtbetrag / anzahlTeilnehmer;

  // Ergebnisse ausgeben
  (<HTMLParagraphElement>(
    document.getElementById("trinkgeld")
  )).innerText = `Trinkgeld: ${trinkgeld.toFixed(2)} €`;
  (<HTMLParagraphElement>(
    document.getElementById("gesamtbetrag")
  )).innerText = `Gesamtbetrag: ${gesamtbetrag.toFixed(2)} €`;
  (<HTMLParagraphElement>(
    document.getElementById("teilBetrag")
  )).innerText = `Anteil pro Teilnehmer: ${teilBetrag.toFixed(2)} €`;
});

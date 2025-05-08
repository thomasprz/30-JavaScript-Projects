const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: [40, Infinity] },
];

document.getElementById('imc_form').addEventListener("submit", function (event) {
  event.preventDefault();

  const taille = parseFloat(document.getElementById("taille").value);
  const poids = parseFloat(document.getElementById("poids").value);

  if (isNaN(taille) || isNaN(poids) || taille <= 0 || poids <= 0) {
    alert("Veuillez entrer des valeurs valides.");
    return;
  }

  const tailleEnM = taille / 100;
  const imc = (poids / (tailleEnM * tailleEnM)).toFixed(1);

  const category = BMIData.find(cat => imc >= cat.range[0] && imc < cat.range[1]);

  const resultDiv = document.createElement("div");
  resultDiv.textContent = `Votre IMC est ${imc} (${category.name})`;
  resultDiv.style.color = category.color;

  document.body.appendChild(resultDiv);
});

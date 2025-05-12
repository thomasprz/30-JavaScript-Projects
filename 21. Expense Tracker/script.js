let totalAmount = 0; // Variable pour suivre le total des dépenses
let expenses = []; // Tableau pour stocker les dépenses ajoutées

// Sélection des éléments DOM
const categorySelect = document.getElementById('category-select'); // Sélecteur de catégorie
const amountInput = document.getElementById('amount-input'); // Champ pour saisir le montant
const dateInput = document.getElementById('date-input'); // Champ pour saisir la date
const addBtn = document.getElementById('add-btn'); // Bouton pour ajouter une dépense
const expensesTableBody = document.getElementById('expenses-table-body'); // Corps du tableau des dépenses
const totalAmountCell = document.getElementById('total-amount'); // Cellule pour afficher le total des dépenses

// Événement au clic sur le bouton "Add"
addBtn.addEventListener('click', function () {
  // Récupération des valeurs des champs du formulaire
  const category = categorySelect.value; // Catégorie sélectionnée
  const amount = Number(amountInput.value); // Montant saisi (converti en nombre)
  const date = dateInput.value; // Date saisie

  // Vérifications des champs
  if (category === '') {
    alert('Please select a category'); // Si aucune catégorie n'est sélectionnée
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount'); // Si le montant n'est pas valide
    return;
  }
  if (date === '') {
    alert('Please select a date'); // Si aucune date n'est saisie
    return;
  }

  // Création de l'objet "expense" avec les informations saisies
  const expense = { category, amount, date };
  expenses.push(expense); // Ajout de l'objet expense au tableau des dépenses

  // Mise à jour du total des dépenses
  totalAmount += amount;
  totalAmountCell.textContent = totalAmount; // Affichage du nouveau total dans le tableau

  // Création d'une nouvelle ligne dans le tableau pour afficher la dépense
  const newRow = expensesTableBody.insertRow(); // Insère une nouvelle ligne dans le tableau

  // Création des cellules de la ligne pour afficher la catégorie, le montant, la date et le bouton "Delete"
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  // Création du bouton "Delete" pour supprimer cette dépense
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete'; // Texte du bouton
  deleteBtn.classList.add('delete-btn'); // Ajout de la classe CSS pour le bouton
  deleteBtn.addEventListener('click', function () {
    // Suppression de la dépense du tableau expenses
    expenses.splice(expenses.indexOf(expense), 1);

    // Mise à jour du total après suppression de la dépense
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    // Suppression de la ligne du tableau
    expensesTableBody.removeChild(newRow);
  });

  // Remplissage des cellules de la ligne avec les informations de la dépense
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn); // Ajout du bouton "Delete" dans la dernière cellule
});

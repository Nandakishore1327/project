// Function to populate the table with expense data
function populateExpenseTable() {
  // Get existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem('expenses')) || [];

  // Get the table body element
  const tableBody = document.getElementById('expenseTableBody');

  // Clear any existing table content
  tableBody.innerHTML = '';

  // Loop through the existing data and add rows to the table
  for (const expenseData of existingData) {
    const newRow = tableBody.insertRow();
    const dateCell = newRow.insertCell();
    const expenseNameCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const accountCell = newRow.insertCell();

    dateCell.textContent = expenseData.date;
    expenseNameCell.textContent = expenseData.name;
    amountCell.textContent = expenseData.amount;
    accountCell.textContent = expenseData.account;
  }
}

// Call the populateExpenseTable function when the page is loaded
window.addEventListener('load', populateExpenseTable);

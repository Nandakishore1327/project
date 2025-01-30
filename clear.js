function clearTableContent() {
    const tableBody = document.getElementById('expenseTableBody');
    tableBody.innerHTML = ''; // This will remove all the rows from the table body
  
    // If needed, you can also clear the data from localStorage
    localStorage.setItem('expenses', JSON.stringify([]));
  }
  
  // Call the clearTableContent function when the "Clear" button is clicked
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', clearTableContent);
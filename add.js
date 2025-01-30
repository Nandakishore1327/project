
document.getElementById('expenseForm').addEventListener('submit', (event) => {
  event.preventDefault();

  
  const name = document.getElementById('expenseName').value;
  const amount = document.getElementById('expenseAmount').value;
  const date = document.getElementById('expenseDate').value;
  const account = document.getElementById('expenseAccount').value;

  const expenseData = {
    name: name,
    amount: amount,
    date: date,
    account: account
  };

  
  const existingData = JSON.parse(localStorage.getItem('expenses')) || [];

  existingData.push(expenseData);

  localStorage.setItem('expenses', JSON.stringify(existingData));


  document.getElementById('expenseForm').reset();
});

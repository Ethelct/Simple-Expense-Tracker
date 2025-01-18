// References to DOM elements
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseBtn = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalAmountSpan = document.getElementById('total-amount');

let totalAmount = 0;

// Function to add an expense
addExpenseBtn.addEventListener('click', () => {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());

  if (!name || isNaN(amount) || amount <= 0) {
    alert('Please enter valid expense details.');
    return;
  }

  // Create a new list item for the expense
  const li = document.createElement('li');
  li.innerHTML = `
    ${name}: $${amount.toFixed(2)}
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  li.querySelector('.delete-btn').addEventListener('click', () => {
    totalAmount -= amount;
    totalAmountSpan.textContent = totalAmount.toFixed(2);
    li.remove();
  });

  // Append the expense to the list and update total
  expenseList.appendChild(li);
  totalAmount += amount;
  totalAmountSpan.textContent = totalAmount.toFixed(2);

  // Clear inputs
  expenseNameInput.value = '';
  expenseAmountInput.value = '';
});

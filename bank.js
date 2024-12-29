
// Get elements
const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');
const balanceElement = document.getElementById('balance');

// Initialize income and expense arrays
let incomes = [];
let expenses = [];

// Function to update balance
function updateBalance() {
    const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const balance = totalIncome - totalExpense;
    balanceElement.textContent = `Balance: $${balance.toFixed(2)}`;
}

// Function to add income
function addIncome(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('income-amount').value);
    const description = document.getElementById('income-description').value;
    incomes.push({ amount, description });
    incomeList.innerHTML += `<li>$${amount.toFixed(2)} - ${description}</li>`;
    updateBalance();
    incomeForm.reset();
}

// Function to add expense
function addExpense(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const description = document.getElementById('expense-description').value
}

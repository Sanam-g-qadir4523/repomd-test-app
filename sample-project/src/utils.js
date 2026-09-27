// utils.js — helper functions, none have docstrings (documentation gaps)

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateOrderId() {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function sumArray(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

module.exports = {
  formatCurrency,
  isValidEmail,
  generateOrderId,
  sumArray
};

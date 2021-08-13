document
  .getElementById("our-calculator")
  .addEventListener("submit", calculateTotals);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateTotals(item) {
  // DOM elements
  const amount = document.getElementById("loan-amount").value;
  const rate = document.getElementById("interest-rate").value;
  const term = document.getElementById("loan-term").value;
  const displayPayment = document.getElementById("payment-monthly");
  const displayTotalInterest = document.getElementById("total-interest");
  const displayTotalPaid = document.getElementById("total-paid");

  // Functional variables
  const principal = parseFloat(amount);
  const interest = parseFloat(rate) / 100 / 12;
  const payment = parseFloat(term) * 12;

  // Calculation variables
  const x = Math.pow(1 + interest, payment);
  const monthly = (principal * x * interest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);
  const totalInterest = (monthly * payment - principal).toFixed(2);
  const totalPayment = (monthly * payment).toFixed(2);

  // Update DOM Output
  displayPayment.innerHTML = numberWithCommas(monthlyPayment);
  displayTotalInterest.innerHTML = numberWithCommas(totalInterest);
  displayTotalPaid.innerHTML = numberWithCommas(totalPayment);
  console.log(monthlyPayment, totalInterest, totalPayment);
  item.preventDefault();
}

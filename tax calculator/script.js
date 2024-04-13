document.getElementById('taxForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const grossIncome = parseFloat(document.getElementById('grossIncome').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value);
  const ageGroup = document.getElementById('ageGroup').value;
  const deductions = parseFloat(document.getElementById('deductions').value);

  // Calculate total income after deductions
  const totalIncome = grossIncome + extraIncome - deductions;

  // Calculate tax based on conditions
  let tax = 0;
  if (totalIncome > 800000) {
    if (ageGroup === "<40") {
      tax = 0.3 * (totalIncome - 800000);
    } else if (ageGroup === "40-60") {
      tax = 0.4 * (totalIncome - 800000);
    } else {
      tax = 0.1 * (totalIncome - 800000);
    }
  }

  // Navigate to result page with tax amount
  window.location.href = `result.html?tax=${tax.toFixed(2)}`;
 
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
        const errorIcon = this.parentElement.querySelector('.error-icon');
        if (!this.checkValidity()) {
            errorIcon.style.display = 'block';
        } else {
            errorIcon.style.display = 'none';
        }
    });
    });
});

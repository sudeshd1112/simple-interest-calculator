document.getElementById('calculate-btn').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
      document.getElementById('result').innerText = "Please enter valid positive values.";
      return;
    }
  
    const simpleInterest = (principal * rate * time) / 100;
  
    document.getElementById('result').innerText = `Simple Interest: ₹${simpleInterest.toFixed(2)}`;
  });
  
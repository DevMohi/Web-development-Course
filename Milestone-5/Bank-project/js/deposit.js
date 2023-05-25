document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newTotal = parseFloat(depositField.value);

  //get deposit total current one
  const depositTotalField = document.getElementById("deposit-total");
  const previousTotal = depositTotalField.innerText;
  const currentDeposit = parseFloat(previousTotal) + newTotal;

  depositTotalField.innerText = currentDeposit;

  //Set balance
  const balanceTotal = document.getElementById("balance-total");
  const previousBalance = parseFloat(balanceTotal.innerText);


  //Calculate balance total
  const currentBalanceTotal = previousBalance + currentDeposit;

  balanceTotal.innerText = currentBalanceTotal;




  //clear field
  depositField.value = "";
});

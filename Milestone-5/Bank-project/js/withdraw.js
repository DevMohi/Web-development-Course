console.log("withdraw");

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newAmount = parseFloat(withdrawField.value);
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousAmount = parseFloat(withdrawTotal.innerText);
  const newTotal = previousAmount + newAmount;
  withdrawTotal.innerText = newTotal;

  //updating balance
  const previousBalanceField = document.getElementById("balance-total");
  const previousBalance = parseFloat(previousBalanceField.innerText);
  const newBalance = previousBalance - newTotal;
  previousBalanceField.innerText = newBalance;
  withdrawField.value = "";

});

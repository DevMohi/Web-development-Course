console.log("withdraw");

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newAmount = parseFloat(withdrawField.value);
  withdrawField.value = "";
  if (isNaN(newAmount)) {
    alert("Please provide an integer");
    return;
  }

  //Step 3
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousAmount = parseFloat(withdrawTotal.innerText);

  //step 4

  //updating balance
  const previousBalanceField = document.getElementById("balance-total");

  const previousBalance = parseFloat(previousBalanceField.innerText);

  if (newAmount > previousBalance) {
    alert("Dont have that much money");
    //To stop it
    return;
  }

  const newTotal = previousAmount + newAmount;
  withdrawTotal.innerText = newTotal;

  const newBalance = previousBalance - newTotal;
  previousBalanceField.innerText = newBalance;
});

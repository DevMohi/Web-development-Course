document.getElementById("btn-submit").addEventListener("click", function () {
  // user email
  const emailField = document.getElementById("user-email");

  const email = emailField.value;

  //User password
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;

  //This is for learning pupose, do not use this
  if (email === "mohi@gmail.com" && password === "1234") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});

let balance = 0;

function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

function copyAddr() {
  navigator.clipboard.writeText(
    document.getElementById("walletAddr").innerText
  );
  alert("Wallet address copied");
}

function deposit() {
  const amt = parseFloat(document.getElementById("amount").value);
  if (!amt || amt <= 0) {
    alert("Enter valid amount");
    return;
  }

  balance += amt;
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("amount").value = "";
}

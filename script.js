function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

function copy() {
  const t = document.getElementById("addr").innerText;
  navigator.clipboard.writeText(t);
  alert("Address copied");
}

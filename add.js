const affichage = document.getElementById("affichage");
const add = document.getElementById("add");
const moins = document.getElementById("moins");

let count = 0;

function updateDisplay() {
  affichage.textContent = count;
}

add.addEventListener("click", () => {
  count++; // incremante
  updateDisplay(); //repars a zero
});

moins.addEventListener("click", () => {
  count--;
  updateDisplay();
});

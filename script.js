/*
Creaţi o pagină web cu următoarele cerinţe de funcţionalitate:
Afisare număr: Un element HTML va afișa un număr. Numărul de pornire trebuie să fie 0.
Butoane de control: Trei butoane vor fi disponibile:
Increment: Când este apăsat, numărul afișat va crește cu 1.
Decrement: Când este apăsat, numărul afișat va scădea cu 1.
Reset: Când este apăsat, numărul afișat va reveni la 0. 
*/

let number = 0;
const numberElement = document.getElementById("number");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

function updateDisplay() {
  numberElement.innerHTML = number;
}

function increment() {
  number++;
  updateDisplay();
}

function decrement() {
  number--;
  updateDisplay();
}

function reset() {
  number = 0;
  updateDisplay();
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

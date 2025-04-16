let secretNumber;
let attempts = 3;

function roleButton() {
  secretNumber = Math.floor(Math.random() * 100);
  attempts = 3;
  document.getElementById('input').value = "";
  document.getElementById('input').disabled = false;
  document.getElementById('output').innerHTML = "Game started! You have 3 attempts.";
  document.getElementById('output').style.color = 'black';
}

function submitButton() {
  let inputText = Number(document.getElementById('input').value);
  let output = document.getElementById('output');

  if (attempts > 0) {
    if (inputText === secretNumber) {
      output.innerHTML = "Correct!";
      output.style.color = "blue";
      document.getElementById('input').disabled = true;
      return;
    } else if (inputText >= secretNumber - 10 && inputText <= secretNumber + 10) {
      output.innerHTML = "Close!";
      output.style.color = "orange";
    } else {
      output.innerHTML = "Far!";
      output.style.color = "red";
    }

    attempts--;

    if (attempts === 0) {
      output.innerHTML = "Game over! The correct number was: " + secretNumber;
      output.style.color = "black";
      document.getElementById('input').disabled = true;
    }
  }
}

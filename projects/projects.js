function clearCalculator() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}

function addition() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first + second;

  outputResult(result);
}

function subtraction() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first - second;

  outputResult(result);
}

function multiplication() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first * second;

  outputResult(result);
}

function division() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);

  if (second !== 0) {
    let result = first / second;
    outputResult(result);
  } else {
    const output = document.getElementById("output");
    output.style.color = "black";
    output.innerHTML = `<h3>Cannot divide by zero</h3>`;
  }
}

function power() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let total = 1;

  for (let i = 0; i < second; i++) {
    total = total * first;
  }

  outputResult(total);
}

function outputResult(result) {
  const output = document.getElementById("output");

  if (result < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }

  output.innerHTML = `<h3>${result}</h3>`;
}

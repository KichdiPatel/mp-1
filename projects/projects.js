function clearCalculator() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}

function addition() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first + second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function subtraction() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first - second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function multiplication() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let result = first * second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function division() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);

  if (second !== 0) {
    let result = first / second;
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `<h3>Cannot divide by zero</h3>`;
  }
}

function power() {
  const first = Number(document.getElementById("first-number").value);
  const second = Number(document.getElementById("second-number").value);
  let total = 1;

  for (let i = 0; i < second; i++) {
    total = total * first;
  }

  document.getElementById("output").innerHTML = `<h3>${total}</h3>`;
}

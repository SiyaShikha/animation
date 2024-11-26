function repeat(string, nTimes) {
  let repeatedString = "";
  for (let index = 0; index < nTimes; index++) {
    repeatedString += string;
  }
  return repeatedString;
}

function sin(x, amplitude, frequency, phase) {
  return Math.round(amplitude * Math.sin(x / frequency) + phase);
}

function createDnaWave(y, z) {
  const colors = ["🔵", "🟢"];

  if (y < z) {
    colors[0] = "🟢";
    colors[1] = "🔵";
  }
  return repeat(' ', Math.min(y, z)) + colors[0] + repeat('-', Math.abs(y - z)) + colors[1];
}

function printDnaWave(index) {
  for (let i = -index; i < index; i++) {
    const y = sin(i, 15, 5, 20);
    const z = sin(-(i + 3), 15, 5, 20);

    console.log(createDnaWave(y, z));
  }
}

// printDnaWave(20);

function delay(time) {
  for (let index = 0; index < time; index++) { }
}

function animateDnaWave() {
  for (let index = 20; index < 500; index += 5) {
    console.clear();
    printDnaWave(index);
    delay(500000000);
  }
}

animateDnaWave();

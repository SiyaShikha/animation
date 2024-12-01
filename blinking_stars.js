const LENGTH = 60;
const WIDTH = 20;

function repeat(string, nTimes) {
  let repeatedString = "";

  for (let index = 0; index < nTimes; index++) {
    repeatedString += string;
  }

  return repeatedString;
}

function generateStar(to, from) {
  const star = to + Math.ceil(Math.random() * (from - to));
  return star;
}

function createSky(length, width) {
  let sky = "";

  for (let row = 1; row <= width; row++) {
    const star1 = generateStar(1, length / 2);
    const star2 = generateStar(length / 2, length);

    sky += "\n" + repeat(" ", star1 - 1) + "✨";
    sky += repeat(" ", (star2 - star1 - 1)) + "✨";
    sky += repeat(" ", length - (star2));
  }

  return sky;
}

function delay(time) {
  for (let i = 0; i <= time; i++) { }
}

function blinkStars(n) {
  for (let sky = 1; sky <= n; sky++) {
    console.clear();
    console.log(createSky(LENGTH, WIDTH));
    delay(800000000);
  }
}

blinkStars(10);

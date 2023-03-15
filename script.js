var dist_digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var colors_digits = ["#59abe3", "#ff9966", "#dd3044", "#8fc742", "#ff6f61", "#00bab5", "#ee82ee", "#ff8a65", "#a569bd", "#00ABE3"];

var total_digits = 0;

let rect_height = 30;
let gutter = 10;

function setup() {
  createCanvas(500, 420);
}

function getNextDigit() {
  return int(random(0, 10))
}

function draw() {
  textSize(rect_height*0.75);
  background("#ffffaa");

  digit = getNextDigit();
  
  total_digits += 1;
  dist_digits[digit] += 1;
  
  max_freq = Math.max.apply(null, dist_digits);
  
  for (let i = 0; i < dist_digits.length; i++) {
    const band_x = gutter;
    const band_y = (i+1)*gutter + (i * rect_height);
    const band_ratio = dist_digits[i]/max_freq;
    const band_freq = dist_digits[i]/total_digits;

    fill("#000000");
    text(i, band_x, band_y + rect_height - gutter/2);
    fill(colors_digits[i]);
    text(int(band_freq*100) + "%", band_x + 3*gutter, band_y + rect_height - gutter/2);
    rect(
      band_x + 8*gutter,
      band_y,
      band_ratio * (width * 0.6),
      rect_height
    );
  }
}


function rgb(r, g, b) {
  return 'rgb('+r+','+g+','+b+')';
}

function rgbToHex(r, g, b) {
  return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}

/**
 * The length of Hex Color Code (exclude hashtag "#" and alpha) must be 3 or 6.
 */
function hexToRGB(hex) {
  const splittedHex = hex.split('');
  const hashtag = splittedHex.shift();

  if (hashtag !== '#') return undefined;

  if (splittedHex.length === 3) {
    return {
      r: parseInt(String(splittedHex[0]) + String(splittedHex[0]), 16),
      g: parseInt(String(splittedHex[1]) + String(splittedHex[1]), 16),
      b: parseInt(String(splittedHex[2]) + String(splittedHex[2]), 16)
    }
  }

  if (splittedHex.length === 6) {
    return {
      r: parseInt(String(splittedHex[0]) + String(splittedHex[1]), 16),
      g: parseInt(String(splittedHex[2]) + String(splittedHex[3]), 16),
      b: parseInt(String(splittedHex[4]) + String(splittedHex[5]), 16)
    }
  }

  return undefined;
}

window.onload = function() {
  const redSlider   = document.getElementById('red-slider');
  const redLabel    = document.querySelector('label[for=red-slider] > .display-value');
  const greenSlider = document.getElementById('green-slider');
  const greenLabel  = document.querySelector('label[for=green-slider] > .display-value');
  const blueSlider  = document.getElementById('blue-slider');
  const blueLabel   = document.querySelector('label[for=blue-slider] > .display-value');
  const hexInput    = document.getElementById('hex');
  const demo        = document.getElementById('demo');

  init();

  function init() {
    onInputRGBSlider();
  }

  redSlider.oninput   = onInputRGBSlider;
  greenSlider.oninput = onInputRGBSlider;
  blueSlider.oninput  = onInputRGBSlider;

  hexInput.oninput = function() {
    const rgbValue = hexToRGB(this.value);
    if (rgbValue) {
      redLabel.innerHTML   = redSlider.value   = rgbValue.r;
      greenLabel.innerHTML = greenSlider.value = rgbValue.g;
      blueLabel.innerHTML  = blueSlider.value  = rgbValue.b;
    }
    displayDemo();
  }

  function onInputRGBSlider() {
    hexInput.value = rgbToHex(parseInt(redSlider.value), parseInt(greenSlider.value), parseInt(blueSlider.value));
    redLabel.innerHTML   = redSlider.value;
    greenLabel.innerHTML = greenSlider.value;
    blueLabel.innerHTML  = blueSlider.value;
    displayDemo();
  }

  function displayDemo() {
    demo.style.backgroundColor = rgb(redSlider.value, greenSlider.value, blueSlider.value);
  }

};
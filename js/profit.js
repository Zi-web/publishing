"use strict";

function update() {
  let inp = document.getElementById("ageInputId");
  let out = document.getElementById("ageOutputId");
  out.textContent = inp.value;
  out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";
}

document.getElementById("ageInputId").addEventListener('input', update);
update();

document.getElementById("ageInputId").addEventListener("change", function() {
  document.getElementById("profit__result").innerHTML = (this.value) * 5000 
});



/**/
const slider = document.querySelector('.form'),
      sliderInput = slider.querySelector('input'),
      sliderOutput = slider.querySelector('output'),
      sliderThumb = slider.querySelector('.custom-thumb'),
      sliderFill = slider.querySelector('.custom-fill');

function initSlider(min, max, startValue) {
  sliderInput.setAttribute('min', min);
  sliderInput.setAttribute('max', max);
  sliderInput.value = startValue;
  
  const onSliderChange = function(event) {
    let value = event.target.value;
    sliderOutput.innerHTML = value;
    sliderThumb.style.left = (value/max * 100) + '%';
    sliderFill.style.width = (value/max * 100) + '%';
  }
  
  sliderInput.addEventListener('input', onSliderChange);
  sliderInput.addEventListener('change', onSliderChange);
  
  // set slider to initial value
  const initialInput = new Event('input', {
    'target': { 'value': startValue }
  });
  sliderInput.dispatchEvent(initialInput);
}

initSlider(0, 100, 10);
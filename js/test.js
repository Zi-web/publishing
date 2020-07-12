"use strict";
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const progress2 = document.getElementById('progress__item-2');
const progress3 = document.getElementById('progress__item-3');
const progress4 = document.getElementById('progress__item-4');
const nextButton1 = document.getElementById('btn1');
const nextButton2 = document.getElementById('btn2');
const nextButton3 = document.getElementById('btn3');
const prevButton1 = document.getElementById('btnPrev1');
const prevButton2 = document.getElementById('btnPrev2');
const prevButton3 = document.getElementById('btnPrev3');
const num = document.getElementById('question__title-num');
const resultBtn = document.getElementById('btnResult');
const col = document.getElementById('quiz__col');
const result = document.getElementById('quiz__result');

nextButton1.onclick = function() {
  question1.style.display = 'none';
  question2.style.display = 'block';
  progress2.classList.add("active");
  num.innerHTML = 2;
}

nextButton2.onclick = function() {
  question2.style.display = 'none';
  question3.style.display = 'block';
  progress3.classList.add("active");
  num.innerHTML = 3;
}

prevButton1.onclick = function() {
  question1.style.display = 'block';
  question2.style.display = 'none';
  progress2.classList.remove("active");
  num.innerHTML = 1;
}

nextButton3.onclick = function() {
  question3.style.display = 'none';
  question4.style.display = 'block';
  progress4.classList.add("active");
  num.innerHTML = 4;
}

prevButton2.onclick = function() {
  question2.style.display = 'block';
  question3.style.display = 'none';
  progress3.classList.remove("active");
  num.innerHTML = 2;
}

resultBtn.onclick = function() {
  col.style.display = 'none';
  result.style.display = 'block';
}

prevButton3.onclick = function() {
  question3.style.display = 'block';
  question4.style.display = 'none';
  progress4.classList.remove("active");
  num.innerHTML = 3;
}



let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
 
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
 
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = '(' + countFiles + ')';
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });


let inputs2 = document.querySelectorAll('.full-form__file');
    Array.prototype.forEach.call(inputs2, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.full-form__file-button-text').innerText;
 
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
 
        if (countFiles)
          label.querySelector('.full-form__file-button-text').innerText = '(' + countFiles + ')';
        else
          label.querySelector('.full-form__file-button-text').innerText = labelVal;
      });
    });

/*"use strict";
let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');
let question3 = document.getElementById('question-3');
let result = document.getElementById('bot-submit');
let nextButtons = document.querySelectorAll('.question__btn');

for (let i = 0; i < nextButtons.length; i++) {
  let nextQuestion = nextButtons[i];
  nextQuestion.onclick = function() {
    switchToNextQuestion(this);
  }
}


function switchToNextQuestion(nextQuestion) {
  let parentId = nextQuestion.parentNode.id;
  if (parentId === 'question-1') {
    question1.style.display = 'none';
    question2.style.display = 'block';
  } else if (parentId === 'question-2') {
    question2.style.display = 'none';
    question3.style.display = 'block';
  } else if (parentId === 'question-3') {
    question3.style.display = 'none';
    question4.style.display = 'block';
  } 
}

result.onclick = function() {
  alert('I am submitting the quiz!');
}

*/


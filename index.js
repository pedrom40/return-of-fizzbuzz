'use strict';

function clearResults(){
  $('.js-results').html('');
}

function numberCounter(numToCount){

  // count from 1 to number submitted
  for (let i=1; i <= numToCount; i++){

    if (i % 3 === 0 && i % 5 === 0){
      appendDiv(i, 'fizzbuzz');
    }
    else if (i % 3 === 0){
      appendDiv(i, 'fizz');
    }
    else if (i % 5 === 0){
      appendDiv(i, 'buzz');
    }
    else {
      appendDiv(i, '');
    }

  }

}

function appendDiv(num, classToAdd){

  const spanTxt = getSpanContent(num, classToAdd);

  $('.js-results').append(`
    <div class="fizz-buzz-item ${classToAdd}">
      <span>${spanTxt}</span>
    </div>
  `);
}

function getSpanContent(num, classToAdd){

  if (classToAdd !== ''){
    return classToAdd;
  }
  else {
    return num;
  }

}

function handleFormSubmission(){

  // reset results div
  clearResults();

  // save number passed
  const numberSubmitted = $('#number-choice').val();

  // check number
  let numberValidated = validateNumber(numberSubmitted);

  // send to counter
  if (numberSubmitted){
    numberCounter(numberSubmitted);
  }

}

function alertUser(){
  $('.js-results').html('Enter a number greated than zero.');

  $('#number-choice').val('');
  $('#number-choice').focus();
}

function validateNumber(num){

  if (num > 0){
    return true;
  }
  else {

    alertUser();
    return false;

  }

}

$(function(){

  $('#number-chooser').submit(event => {
    event.preventDefault();

    handleFormSubmission();

  });

});

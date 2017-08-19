'use strict';

function clearResults(){
  $('.js-results').html();
}

function numberCounter(numToCount){

  // count from 0 to number submitted
  for (let i=0; i <= numToCount; i++){

    if (i % 3 === 0 && i % 5 === 0){
      appendDiv(i, '.fizzbuzz');
    }
    else if (i % 3 === 0){
      appendDiv(i, '.fizz');
    }
    else if (i % 5 === 0){
      appendDiv(i, '.buzz');
    }
    else {
      appendDiv(i, '');
    }

  }

}

function appendDiv(num, classToAdd){
  $('.js-results').append(`
    <div class="fizz-buzz-item ${classToAdd}">
      <span>${num}</span>
    </div>
  `);
}

function resetInputs(){
  $('#number-choice').val('');
}

function handleFormSubmission(){

  // reset results div
  clearResults();

  // send to counter
  numberCounter($('#number-choice').val());

  // reset form
  resetInputs();

}

$(function(){

  $('#number-chooser').submit(event => {
    event.preventDefault();

    handleFormSubmission();

  });

});

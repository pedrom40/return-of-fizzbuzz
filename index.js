'use strict';

function clearResults(){
  $('.js-results').html();
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

function getSpanContent(num, classToAdd){
  let spanContent = '';

  if (classToAdd !== ''){
    spanContent = classToAdd;
  }
  else {
    spanContent = num;
  }

  return spanContent;
}

function appendDiv(num, classToAdd){

  const spanTxt = getSpanContent(num, classToAdd);

  $('.js-results').append(`
    <div class="fizz-buzz-item ${classToAdd}">
      <span>${spanTxt}</span>
    </div>
  `);
}

function handleFormSubmission(){

  // reset results div
  clearResults();

  // send to counter
  numberCounter($('#number-choice').val());

}

$(function(){

  $('#number-chooser').submit(event => {
    event.preventDefault();

    handleFormSubmission();

  });

});

'use strict';

// function yesNoQuiz(){
//   var a1 = prompt('Was I born in Washington state?').toLowerCase();
//   var a2 = prompt('Have I ever been to Europe?').toLowerCase();
//   var a3 = prompt('Am I under 25 years old?').toLowerCase();
//   var a4 = prompt('Did I have a mixed breed dog when I was growing up?').toLowerCase();
//   var a5 = prompt('Did I attend a public elementary school?').toLowerCase();
//
//   var questions = [a1, a2, a3, a4, a5];
//
//   var possibleAnswers = [
//     ['y', 'yes'],
//     ['n', 'no'],
//     ['n', 'no'],
//     ['y', 'yes'],
//     ['n', 'no']
//   ];
//
//   var responses = ['Correct!', 'Incorrect.'];
//
//   for (var i = 0; i < questions.length; i++) {
//     var incorrect = true;
//     for ( var v = 0; v < possibleAnswers[i].length; v++){
//       if (questions[i] === possibleAnswers[i][v]){
//         console.log(responses[0]);
//         incorrect = false;
//         // break;
//       }
//     }
//   }
//
//   if (incorrect === true){
//     console.log(responses[1]);
//   }
//
// }
//
//
// yesNoQuiz();
//




var correctAnswers = 0;
function homeState(){
  var answer1 = prompt('Was I born in Washington state?').toUpperCase();


  if (answer1 === 'YES' || answer1 === 'Y'){
    alert('Correct!');
    correctAnswers += 1;
    console.log('user answered question 1 correctly.  Currently ' + correctAnswers + ' of 7 answers correct.');
  } else {
    alert('Incorrect');
    console.log('user answered quesion 1 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
  }
}
homeState();

function euroTrip(){
  var answer2 = prompt('Have I ever been to Europe?').toUpperCase();

  if (answer2 === 'NO' || answer2 === 'N'){
    alert('Correct!');
    correctAnswers += 1;
    console.log('user answered question 2 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
  } else {
    alert('Incorrect');
    console.log('user answered question 2 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
  }
}
euroTrip();

function howOld(){
  var answer3 = prompt('Am I under 25 years old?').toUpperCase();

  if (answer3 === 'NO' || answer3 === 'N'){
    alert('Correct!');
    correctAnswers += 1;
    console.log('user answered question 3 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
  } else {
    alert('Incorrect');
    console.log('ser answered question 3 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
  }
}
howOld();

function dogBreed(){
  var answer4 = prompt('Did I have a mixed breed dog when I was growing up?').toUpperCase();

  if (answer4 === 'YES' || answer4 === 'Y'){
    alert('Correct!');
    correctAnswers += 1;
    console.log('user answered question 4 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
  } else {
    alert('Incorrect');
    console.log('user answered question 4 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
  }
}
dogBreed();

function publicSchool(){
  var answer5 = prompt('Did I attend a public elementary school?').toUpperCase();

  if (answer5 === 'NO' || answer5 === 'N'){
    alert('Correct!');
    correctAnswers += 1;
    console.log('user answered question 5 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
  } else {
    alert('Incorrect');
    console.log('user answered question 5 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
  }
}
publicSchool();

function carsCrashed(){
  var numChoice = 0;
  var answer = false;
  var counter = 0;

  while (answer === false && counter < 4){
    var answer6 = parseInt(prompt('How many cars have I crashed?'));
    for( var i = 0; i < 4; i ++ ){
      if (answer6 === numChoice){
        alert('Correct!');
        correctAnswers += 1;
        console.log('user answered question 6 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
        console.log('user answer to question 6 was ' + numChoice);
        answer = true;
        i = 4;
      }
    } if (answer === false){
      alert('Incorrect.');
      counter ++;
    }
  }
}
carsCrashed();

function countriesVisited(){
  var multiChoice = ['MEXICO', 'CANADA', 'THAILAND', 'JAPAN'];
  var counter = 0;
  var answer = false;

  while (answer === false && counter < 6) {
    var answer7 = prompt('What countries have I visited outside of the U.S.?').toUpperCase();
    for ( var i = 0; i < multiChoice.length; i ++) {
      if( answer7 === multiChoice[i]){
        alert('Correct!');
        correctAnswers += 1;
        console.log('user answered question 7 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
        console.log('user answer for question7 was ' + answer7);
        answer = true;
      }
    }
    if (answer === false) {
      alert('Incorrect');
      counter ++;
    }
  }
}
countriesVisited();

document.write('<p id="JStext">' + correctAnswers + '</p>');

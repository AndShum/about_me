'use strict';


var answer1 = prompt('Was I born in Washington state?').toUpperCase();
var correctAnswers = 0;

// if (answer1 === 'YES' || answer1 === 'Y'){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 1 correctly.  Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('user answered quesion 1 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }
//
// var answer2 = prompt('Have I ever been to Europe?').toUpperCase();
//
// if (answer2 === 'NO' || answer2 === 'N'){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 2 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('user answered question 2 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }
//
// var answer3 = prompt('Am I under 25 years old?').toUpperCase();
//
// if (answer3 === 'NO' || answer3 === 'N'){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 3 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('ser answered question 3 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }
//
// var answer4 = prompt('Did I have a mixed breed dog when I was growing up?').toUpperCase();
//
// if (answer4 === 'YES' || answer4 === 'Y'){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 4 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('user answered question 4 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }
//
// var answer5 = prompt('Did I attend a public elementary school?').toUpperCase();
//
// if (answer5 === 'NO' || answer5 === 'N'){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 5 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('user answered question 5 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }

var numChoice = 0;
var answer = false;
var counter = 0;

while (answer === false && counter < 4){
  var answer6 = parseInt(prompt('How many cars have I crashed?'));
  for( var i = 0; i < 4; i ++ ){
    if (answer6 === numChoice){
      alert('Correct!');
      correctAnswers += 1;
      console.log('user answered question 5 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
      console.log('user answer to question 6 was ' + numChoice);
      answer = true;
    }
  } if (answer === false){
    alert('Incorrect.');
    counter ++
  }
}

// if (answer6 === 0){
//   alert('Correct!');
//   correctAnswers += 1;
//   console.log('user answered question 6 correctly. Currently ' + correctAnswers + ' of 7 answers correct.');
// } else {
//   alert('Incorrect');
//   console.log('user answered question 6 incorrectly. Currently ' + correctAnswers + ' of 7 answers correct.');
// }

var multiChoice = ['MEXICO', 'CANADA', 'THAILAND', 'JAPAN'];


while (answer === false && counter < 6) {
  var answer7 = prompt('What countries have I visited outside of the U.S.?').toUpperCase();
  for ( i = 0; i < multiChoice.length; i ++) {
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


if (correctAnswers <= 3){
  alert(correctAnswers + ' out 7 correct? You don\'t know me at all do you?');
} else if (correctAnswers <= 5){
  alert(correctAnswers + ' out 7 correct. Not too bad, well done.');
} else {
  alert(correctAnswers + ' out of 7 correct...why do you know so much about me?');
}

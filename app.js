'use strict';

var correctAnswers = 0; //keeps track of the number of questions user has gotten correct

//asking user to answer question 1
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

//asking user to answer question 2
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

//asking user to answer question 3
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

//asking user to answer question 4
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

//asking user to answer question 5
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

//asking user to answer question 6
function carsCrashed(){
  var numChoice = 0; //value of the correct answer
  var answer = false; //parameter allowing the loop to continue as long as the user guesses are incorrect
  var counter = 0;//keeps track of how many guesses the user has attempted

//allows the user 4 chances to correctly guess the correct number
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

//askking user to answer question 7
function countriesVisited(){
  var multiChoice = ['MEXICO', 'CANADA', 'THAILAND', 'JAPAN'];//values of answers that would be correct
  var counter = 0;//keeps track of how many guesses the user has attempted
  var answer = false;//parameter allowing the loop to continue as long as the user guesses are incorrect

//allows the user 6 chances to correctly guess 1 of 4 options
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

//displays the number of correc t answer the user got correct in the center of the screen
document.write('<p id="JStext">' + correctAnswers + '</p>');

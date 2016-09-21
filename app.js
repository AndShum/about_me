"use strict";


var question1 = prompt('Was I born in Washington state?').toUpperCase();

if (question1 === 'YES' || question1 === 'Y'){
  alert("Correct!");
  console.log('user answered question 1 correctly');
} else {
  alert("Incorrect");
  console.log('user answered quesion 1 incorrectly');
}

var question2 = prompt('Have I ever been to Europe?').toUpperCase();

if (question2 === 'NO' || question2 === 'N'){
  alert("Correct!");
  console.log('user answered question 2 correctly');
} else {
  alert("Incorrect");
  console.log('user answered question 2 incorrectly');
}

var question3 = prompt('Am I under 25 years old?').toUpperCase();

if (question3 === 'NO' || question3 === 'N'){
  alert("Correct!");
  console.log('user answered question 3 correctly');
} else {
  alert("Incorrect");
  console.log('ser answered question 3 incorrectly');
}

var question4 = prompt('Did I have a mixed breed dog when I was growing up?').toUpperCase();

if (question4 === 'YES' || question4 ==='Y'){
  alert("Correct!");
  console.log('user answered question 4 correctly');
} else {
  alert("Incorrect");
  console.log('user answered question 4 incorrectly');
}

var question5 = prompt('Did I attend a public elementary school?').toUpperCase();

if (question5 === 'NO' || question5 === 'N'){
  alert("Correct!")
  console.log('user answered question 5 correctly');
} else {
  alert("Incorrect");
  console.log('user answered question 5 incorrectly');
}

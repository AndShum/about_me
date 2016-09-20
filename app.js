"use strict";

// var username = prompt('What is your name?');
// alert('Welcome, ' + username + '!');
// console.log('The user\'s name is ' + username + '.');
// var city = prompt('Where are you from ' + username + '?');
// console.log('The user is from ' + city);
// alert('That\'s great! I love ' + city);
// var fav_activity = prompt('What is your favorite activity to do around ' + city + '?');
// console.log('The user enjoy\'s ' + fav_activity);
// alert('Very cool!');
// var time = prompt('How long have you been into ' + fav_activity + '?');
// console.log('User has been into ' + fav_activity + ' for ' + time);
// alert('Welcome ' + username + '! It\'s great to meet you! I\'m sure you will be able to find lots of other people while visiting our site that enjoy ' + fav_activity + '! Especially in the ' + city + ' area!');

var question1 = prompt('Was I born in Washington state?').toUpperCase();

if (question1 === 'YES' || question1 === 'Y'){
  console.log('user answered question 1 correctly');
} else {
  console.log('user answered quesion 1 incorrectly');
}

var question2 = prompt('Have I ever been to Europe?').toUpperCase();

if (question2 === 'NO' || question2 === 'N'){
  console.log('user answered question 2 correctly');
} else {
  console.log('user answered question 2 incorrectly');
}

var question3 = prompt('Am I under 25 years old?').toUpperCase();

if (question3 === 'NO' || question3 === 'N'){
  console.log('user answered question 3 correctly');
} else {
  console.log('ser answered question 3 incorrectly');
}

var question4 = prompt('Did I have a mixed breed dog when I was growing up?').toUpperCase();

if (question4 === 'YES' || question4 ==='Y'){
  console.log('user answered question 4 correctly');
} else {
  console.log('user answered question 4 incorrectly');
}

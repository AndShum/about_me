"use strict";

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username + '.');
var city = prompt('Where are you from ' + username + '?');
console.log('The user is from ' + city);
alert('That\'s great! I love ' + city);
var fav_activity = prompt('What is your favorite activity to do around ' + city + '?');
console.log('The user enjoy\'s ' + fav_activity);
alert('Very cool!');
var time = prompt('How long have you been into ' + fav_activity + '?');
console.log('User has been into ' + fav_activity + ' for ' + time);
alert('Welcome ' + username + '! It\'s great to meet you! I\'m sure you will be able to find lots of other people while visiting our site that enjoy ' + fav_activity + '! Especially in the ' + city + ' area!');

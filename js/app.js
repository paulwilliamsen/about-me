'use strict';

  var userName = prompt('What is your nickname?');

  var playGame = prompt('Ok, ' + userName + ', do you want to play a game now? Enter Y or N');
  playGame = playGame.toLowerCase();
  console.log (playGame);

  if(playGame !== 'y') {
  alert('Man, you really dont want to play do you?');
  console.log(playGame);
  var playGame = prompt('Ok, ' + userName + ', do you want to play a game now, or should we wait a while?');
  }
  if(playGame === 'y') {
    alert('Prepare for the time of your life');
    console.log('Y or N');
  } else { 
    alert('Prepare for the time of your life anyway...');
    console.log('Y or N');
  }

  alert('Now the real fun begins... (click either button) I wont fool you this time ;\)\ ')

  alert('BTW, please use Y/y or N/n for your answers. Yes and No are also acceptable. If you try to any other words the CIA will come after you.')

  // Question Section
  var first = prompt('Do I have any kids?').toLowerCase();
  console.log ('Answer to first question: ' + first);

  if (first === 'y' || first === 'yes' ) {
    alert ('I wish I did, but maybe soon! In fact, here is my wife\'s phone number. Please call her. 1-800-LUV-KIDS ');
  } else {
    alert('BINGO. You are correct.');
  }
  var second = prompt('Do I have more than 10 toes on my feet?').toLowerCase();
  console.log ('Answer to second question: ' + second);
  

  if (second === 'n' || second === 'no' ) {
    alert('That would make me swim faster but I am currently the proud owner of 10 toes.')
  } else {
    alert('I always wanted to have excess digits...');
  }

  var third = prompt("Is Starwars better than Harry Potter?").toLowerCase();
  console.log ('Answer to third question: ' + third);
  

  if (third === 'no' || third === 'n') {
    alert('I knew you wern\'t a muggle...');
  } else {
    alert('Wut');
    alert('I think this test is over now');
    alert('No really, stop clicking...');
    alert('stop');
    alert('stop');
    alert('STOP');
    alert('Ok, I took a deep breath, some fresh air, had a drink of water. Let\'s continue' );
  }

  var fourth = prompt("Was I older than the age of 14 when I first got a beard? ").toLowerCase();
  console.log ('Answer to fourth question: ' + fourth);
  

  alert('Beards are still in right?')

  if (fourth === 'y' ||  fourth === 'yes'){
    alert('You are joking. You thought I had hair as a baby? Who are you? Well you would be right. I had a beard at 13 years old... ');
  }  else {
    alert('Nope.');
  }

  var fifth = prompt('Will I be a succesful software developer by April?').toLowerCase();
  console.log ('Answer to fifth question: ' + fifth);
 

  if (fifth === 'y' || fifth === 'yes' || fifth === 'n' || fifth === 'no'){
    alert('You bet I will!');
  }
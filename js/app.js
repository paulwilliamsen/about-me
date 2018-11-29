'use strict';

var userName = prompt('What would you like to be called today?');
var answersCorrect = 0;
answersCorrect;

var playGame = prompt('Ok, ' + userName + ', do you want to play a game now? Enter Y or N').toLowerCase();
console.log(playGame);

if (playGame !== 'y') {
  alert('Man, you really dont want to play do you?');
  console.log(playGame);
  playGame = prompt('Ok, ' + userName + ', do you want to play a game now, or should we wait a while?');
}
if (playGame === 'y') {
  alert('Prepare for the time of your life');
  console.log('Y or N');
} else {
  alert('Prepare for the time of your life anyway...');
  console.log('Y or N');
}

alert('Now the real fun begins... (click either button) I wont fool you this time!');

alert('BTW, please use Y/y or N/n for your answers. Yes and No are also acceptable. If you try to any other words the CIA will come after you.');


var first = prompt('Do I have any kids?').toLowerCase();
console.log('Answer to first question: ' + first);

if (first === 'y' || first === 'yes') {
  alert('I wish I did, but maybe soon! In fact, here is my wife\'s phone number. Please call her. 1-800-LUV-KIDS ');
} else {
  alert('BINGO. You are correct.');
  answersCorrect++;
}
var second = prompt('Do I have more than 10 toes on my feet?').toLowerCase();
console.log('Answer to second question: ' + second);


if (second === 'n' || second === 'no') {
  alert('That would make me swim faster but I am currently the proud owner of 10 toes.');
  answersCorrect++;

} else {
  alert('I always wanted to have excess digits...');
}

var third = prompt('Is Starwars better than Harry Potter?').toLowerCase();
console.log('Answer to third question: ' + third);


if (third === 'no' || third === 'n') {
  alert('I knew you wern\'t a muggle...');
  answersCorrect++;
} else {
  alert('Wut');
  alert('I think this test is over now');
  alert('No really, stop clicking...');
  alert('stop');
  alert('stop');
  alert('STOP');
  alert('Ok, I took a deep breath, some fresh air, had a drink of water. Let\'s continue');
}

var fourth = prompt('Was I older than the age of 14 when I first got a beard? ').toLowerCase();
console.log('Answer to fourth question: ' + fourth);

alert('Beards are still in right?');

if (fourth === 'y' || fourth === 'yes') {
  alert('You are joking. You thought I had hair as a baby? Who are you? Well you would be right. I had a beard at 13 years old... ');
  answersCorrect++;
} else {
  alert('Nope you are wrong. I was a youngster with a beard.');
}

var fifth = prompt('Will I be a succesful software developer by April?').toLowerCase();
console.log('Answer to fifth question: ' + fifth);


if (fifth === 'y' || fifth === 'yes' || fifth === 'n' || fifth === 'no') {
  alert('You bet I will!');
  answersCorrect++;


}

var mountainsClimbed = 15;
var guessesRemaining = 4;


while (guessesRemaining > 0) {
  var howManyMountainsClimbed = prompt('Can you guess how many mountains I have climbed?');


  howManyMountainsClimbed = parseInt(howManyMountainsClimbed);
  console.log('mountains climbed: ' + howManyMountainsClimbed);

  if (howManyMountainsClimbed === mountainsClimbed) {
    alert('Congrats, you nailed it.');
    console.log('Guessed Correctly');
    answersCorrect++;
    break;
  } else if (howManyMountainsClimbed < mountainsClimbed) {
    alert('Try again, higher this time');
    console.log('Wrong answer, higher ' + howManyMountainsClimbed);
    guessesRemaining--;
  } else if (howManyMountainsClimbed > mountainsClimbed) {
    alert('Try again, lower this time');
    console.log('Wrong answer, lower ' + howManyMountainsClimbed);
    guessesRemaining--;
  }
}
if (guessesRemaining === 0) {
  alert('I am not sure we can be friends if you do not know me that well...');
  console.log('Finally wrong');
}

var friendsNames = ['sarah', 'jo', 'matt', 'jared', 'cale'];

var secondGuessesRemaining = 6;



while (secondGuessesRemaining > 0) {
  var bestfriends = prompt('Can you guess one of my five best friends names?').toLowerCase();
  console.log('bestfriends:' + bestfriends);
  secondGuessesRemaining--;

  for (var i = 0; i < friendsNames.length; i++) {
    if (bestfriends === friendsNames[i]) {
      alert('You must be one of these people or know me super well!');
      secondGuessesRemaining = -1;
      answersCorrect++;
      break;
    }
  }
  if (secondGuessesRemaining > 0) {
    alert('Nice try, try again.');
  }
  if (secondGuessesRemaining === 0) {
    alert('You have reached your limit of 6 guesses');
  }
}
if (answersCorrect === 0) {
  alert('Sorry ' + userName + ', I regret to inform you, that you didn’t even try! Wanna test again?');
} else if (answersCorrect > 0 && answersCorrect < 4) {
  alert(userName + ', you got ' + answersCorrect + ' . You might be the least worst.');
} else if (answersCorrect > 3 && answersCorrect < 7) {
  alert('You did it! ' + answersCorrect + ' out of 7 answers correct! That\'s a good score, can you do better?.');
} else {
  alert(userName + ' You are either me, or you cheated');
}


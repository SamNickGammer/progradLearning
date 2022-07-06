var msg1 = document.getElementById('message1');
var msg2 = document.getElementById('message2');
var msg3 = document.getElementById('message3');

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
  var user_guess = document.getElementById('guess');
  if (user_guess.value < 1 || user_guess.value > 100) {
    alert('Please enter a number between 1 and 100.');
  } else {
    guessed_nums.push(user_guess.value);
    no_of_guesses += 1;

    if (user_guess.value < answer) {
      msg1.textContent = 'Your guess is too low.';
      msg2.textContent = 'No. of guesses: ' + no_of_guesses;
      msg3.textContent = 'Guessed numbers are: ' + guessed_nums;
      user_guess.value = null;
    } else if (user_guess.value > answer) {
      msg1.textContent = 'Your guess is too high.';
      msg2.textContent = 'No. of guesses: ' + no_of_guesses;
      msg3.textContent = 'Guessed numbers are: ' + guessed_nums;
      user_guess.value = null;
    } else if (user_guess.value == answer) {
      msg1.textContent = 'Yippie You Win!!';
      msg2.textContent = 'The number was: ' + answer;
      msg3.textContent = 'You guessed it in ' + no_of_guesses + ' guesses';
      document.getElementById('my_btn').disabled = true;
    }
  }
}

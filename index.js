const readlineSync = require('readline-sync');

function startGame() {
  console.log('Welcome to the Number Guessing Game!');
  const lowerBound = readlineSync.question('Enter the lower bound: ');
  const upperBound = readlineSync.question('Enter the upper bound: ');

  const randomNumber = Math.floor(Math.random() * (parseInt(upperBound) - parseInt(lowerBound) + 1)) + parseInt(lowerBound);
  console.log(`Guess the number between ${lowerBound} and ${upperBound}.`);

  let guess;
  do {
    guess = readlineSync.question('Enter your guess: ');
    guess = parseInt(guess, 10);

    if (!Number.isInteger(guess)) {
      console.log('Please enter a valid number.');
    } else if (guess < randomNumber) {
      console.log('Too low!');
    } else if (guess > randomNumber) {
      console.log('Too high!');
    } else {
      console.log(`Congratulations! You guessed the number: ${randomNumber}`);
      let playAgain = readlineSync.question('Do you want to play again? (yes/no): ').toLowerCase();
      if (playAgain === 'yes') {
        startGame();
      } else {
        console.log('Thank you for playing. Goodbye!');
        process.exit();
      }
    }
  } while (guess !== randomNumber);
}

startGame();

class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    this.orderedGuessedLetters = '_'.repeat(this.secretWord.length).split("");
    // ... your code goes here
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
    return randomWord;
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    let char = String.fromCharCode(keyCode);
    console.log(char, keyCode);
    if (char >= 'A' && char <= 'Z') {
      console.log(true)
      return true;

    } else {
      console.log(false)
      return false;
    }
  }

  checkClickedLetters(letter) {
    let clickedLetter = !this.letters.includes(letter);
    if (clickedLetter) this.letters.push(letter)
    return clickedLetter ? true : false;

    // ... your code goes here
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    /*     let receivedLetter = this.letters += this.guessedLetters[letter];
        this.checkWinner(); */
    for (let i = 0; i < this.secretWord.length; i++) {
      if (letter === this.secretWord[i]) {
        this.orderedGuessedLetters[i] = letter;
      }
    }
    this.guessedLetters += letter;
  }


  addWrongLetter(letter) {
    // ... your code goes here
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft -= 1;
      this.letters.push(letter)
    }
    this.checkGameOver()
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        return false;
      }
      return true;
    }
  }
}

/* 
return true; */
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
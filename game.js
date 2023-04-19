const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

class Game {
  guess(oneletter) {
    if (oneletter === "a") {
      return true;
    } else {
      return false;
    }
  }

  getRandomWord(difficulty) {
    // let randomWord = Math.floor(Math.random(Math.ceil(1) * max));
    switch (difficulty) {
      case EASY: {
        return "hey";
      }
      case MEDIUM: {
        return 'coucou';
      }
      case HARD: {
        return 'welcome!';
      }
    }
  }
}

module.exports = { Game: Game, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD };

class Game {
  guess(oneletter) {
    if (oneletter === "a") {
      return true;
    } else {
      return false;
    }
  }
}
module.exports =  Game;

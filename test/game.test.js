const { Game, EASY, MEDIUM, HARD } = require("../game.js");
const chai = require("chai");

var expect = chai.expect;

let game = new Game();

describe("Game engine test", function () {
  describe("When a letter is found", function () {
    it("Should return false when the letter is present", function () {
      expect(game.guess("a")).is.true;
    });
  });

  describe("When a letter is not found", function () {
    it("Should return false when the letter is not present", function () {
      expect(game.guess("z")).is.false;
    });
  });

  describe("When you get a random word", function () {
    it("Should return undefined when the random word is not found", function () {
      expect(game.getRandomWord(EASY).length).is.lessThan(6);
    });

    it("Should return undefined when the random word is not found", function () {
      expect(game.getRandomWord(MEDIUM).length)
        .is.greaterThan(5)
        .lessThanOrEqual(7);
    });

    it("Should return undefined when the random word is not found", function () {
      expect(game.getRandomWord(HARD).length).is.greaterThan(7);
    });
  });
  
});

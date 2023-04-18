

const Game = require("../game.js");
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
});
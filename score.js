'use strict';

const scoreIdentifiers = require('./score-identifiers');

module.exports = class Score {

  constructor (scoreIdentifier) {
    if (!scoreIdentifiers.includes(scoreIdentifier)) {
      throw 'Missing score identifier';
    }

    this.score = 0;
  }

  addScore (newScore) {
    if (newScore) {
      this.score = this.score + newScore;
    }

    return this.score;
  }

}

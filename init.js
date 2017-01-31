'use strict';

// This file serves as a poor man's server just to test stuff in development.

const scoreIdentifiers = require('./score-identifiers');
let Score = require('./score');
let Targets = {};

scoreIdentifiers.forEach((identifier) => {
  Targets[identifier] = new Score(identifier);
});

console.log(Targets);
console.log('------')
console.log('Tests:')
console.log('Adding positive score to republicans from', Targets.republicans.score, 'to', Targets.republicans.addScore(2));
console.log('Adding negative score to democrats from', Targets.republicans.score, 'to', Targets.republicans.addScore(-1));

#!/usr/bin/env node
import getStart from '../src/index.js';
import brainProgression from '../src/games/progression.js';

console.log(getStart('brain-gcd', brainProgression));

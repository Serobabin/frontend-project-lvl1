#!/usr/bin/env node
import getStart from '../src/index.js';
import brainGcd from '../src/games/getGcd.js';

console.log(getStart('brain-gcd', brainGcd));

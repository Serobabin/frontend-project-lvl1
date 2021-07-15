#!/usr/bin/env node
import getStart from '../src/index.js';
import brainPrime from '../src/games/isPrime.js';

console.log(getStart('brain-prime', brainPrime));

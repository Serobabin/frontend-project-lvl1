#!/usr/bin/env node
import getStart from '../src/index.js';
import brainCalc from '../src/games/calc.js';

console.log(getStart('brain-calc', brainCalc));

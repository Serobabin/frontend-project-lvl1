#!/usr/bin/env node
import getStart from '../src/index.js';
import brainEven from '../src/games/isEven.js';

console.log(getStart('brain-even', brainEven));

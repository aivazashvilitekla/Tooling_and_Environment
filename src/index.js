import { isFriday, isWednesday } from 'date-fns';
import { log } from './logger.js';
import { currentDate } from './utils.js';

// console.log(3 ?? 5);

log('my message');
currentDate();

console.log('is friday? ', isFriday(new Date()));
console.log('is wednesday? ', isWednesday(new Date()));

var a = 5;

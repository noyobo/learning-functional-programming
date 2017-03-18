var R = require('ramda');

var words = R.split(' ');

var sentences = R.map(words);

var filterQs = R.filter(R.test(/^q/));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max
var _keepHighest = function(x, y) {
  return x >= y ? x : y;
}; // <- leave be

var max = R.reduce(_keepHighest, -Infinity);

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)

var slice = R.curry((begin, end, arr) => arr.slice(begin, end));

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. make it curried

// var take = R.curry((length, arr) => slice(0, length, arr))
// var take = slice(0)(2)(arr);
// var take = slice(0)(2);
// var take = slice(0);

var take = slice(0);

module.exports = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take
};

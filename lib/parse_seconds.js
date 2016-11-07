const SECONDS_MULTIPLIER = [3600, 60, 1];

function toSeconds(carry, item, i) {
  return carry + (item * SECONDS_MULTIPLIER[i]);
}
function toInteger(item) {
  return parseInt(item);
}

module.exports = function (input) {
  return input.split(":").map(toInteger).reduce(toSeconds,0);
  //return reducer(mapper(input.split(":"), toInteger), toSeconds, 0);
}


function mapper(arr, fn) {
  var result = [];
  for(var i=0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

function reducer(arr, fn, initialValue) {
  var carry = initialValue;
  for(var i=0; i < arr.length; i++) {
    carry = fn(carry, arr[i], i);
  }
  return carry;
}

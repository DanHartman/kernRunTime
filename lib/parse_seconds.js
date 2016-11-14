const SECONDS_MULTIPLIER = [3600, 60, 1];

function toSeconds(carry, item, i) {
  return carry + (item * SECONDS_MULTIPLIER[i]);
}
function toInteger(item) {
  return parseInt(item);
}

module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new Error('Expected a string.');
  }
  return input.split(":").map(toInteger).reduce(toSeconds,0);
}

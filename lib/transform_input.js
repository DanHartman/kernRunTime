const parseSeconds = require('./parse_seconds');

module.exports = function (input) {
  return {
    date: input[0],
    duration: parseSeconds(input[2])
  };
}


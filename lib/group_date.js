const parseSeconds = require('./parse_seconds');

module.exports = function (input) {
  return input.reduce(function(newObj, currentItem) {
    var keyExistsAlready = newObj[currentItem[0]];
    var totalSeconds = parseSeconds(currentItem[2])

    if(keyExistsAlready) {
      newObj[currentItem[0]] += totalSeconds;
    } else {
      newObj[currentItem[0]] = totalSeconds;
    }
    return newObj;
  }, {});
}
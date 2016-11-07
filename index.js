const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const parseSeconds = require('./lib/parse_seconds');

const fileLog = fs.readFileSync('./laserFiles/FileLog.CSV', 'utf-8');

const lines = parse(fileLog);
console.log(lines.map(function(line) {
  return parseSeconds(line[2]);
}));

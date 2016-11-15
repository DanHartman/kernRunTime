const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const moment = require('moment');

const group_date = require('./lib/group_date');
const fileLog = fs.readFileSync('./laserFiles/FileLog.CSV', 'utf-8');
const lines = parse(fileLog);
const grouped_lines = group_date(lines.slice(1));

const date = '10/03/2016';
const runtime = moment.duration(grouped_lines[date], 's');

console.log(
  date + " Total Usage: " + 
  runtime.hours() + ":" + runtime.minutes() + ":" + runtime.seconds()
);

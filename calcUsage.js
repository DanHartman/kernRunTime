var fs = require('fs');
// var csv = require("fast-csv");
// var filelog = fs.createReadStream("/laserPC/ProgramData/Kern\ Electronics/Kcam7/FileLog.CSV");
// var flheaders = ["Date","Time","Elapsed","Notes","Filename"];
// var machinetime = fs.createReadStream("/laserPC/ProgramData/Kern\ Electronics/Kcam7/MachineTime.CSV");
// var mtheaders = ["Date","Used","Percent","Idle","Percent","Total Seconds","Notes"];
// var jobTime = csv.fromStream(filelog, {headers : flheaders});
// var systemTime = csv.fromStream(machinetime, {headers : mtheaders});


// var getDate = function(data) { return data.Date; }
// var dates = new Object();
// dates = jobTime.on("data");
// systemTime.on("data", function(systemTimeData) { return systemTimeData.})
// var dates;

// jobTime.on("data", getDate);

function getDate(data) { 
  console.log(data.Date);
}

// console.log(dates);

const days = [
  {
    id: 1,
    duration: 100
  },
  {
    id: 2,
    duration: 1000
  },
  {
    id: 3,
    duration: 5000
  }
];

const jobs = [
  {
    id: 1,
    day_id: 1,
    duration: 20
  },
  {
    id: 1,
    day_id: 1,
    duration: 200
  },
  {
    id: 2,
    day_id: 2,
    duration: 500
  },
  {
    id: 3,
    day_id: 3,
    duration: 1000
  }
];

var foo = days.map(function (day) {
  return {
    day: day.id,
    duration_on: day.duration,
    duration_working: jobs.reduce(function (carry, job) {
      // skip jobs that aren't for this day
      if (job.day_id !== day.id) {
        return carry;
      }
      return carry + job.duration;
    }, 0)
  };
});

var mtdata = 
  fs.readFileSync('laserFiles/MachineTime.CSV')
  .toString()
  .split('\r\n');

var mtheaders = mtdata[0].split(',');

console.log(mtheaders)
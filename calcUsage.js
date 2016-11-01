var fs = require('fs');
var csv = require("fast-csv");
var filelog = fs.createReadStream("/laserPC/ProgramData/Kern\ Electronics/Kcam7/FileLog.CSV");
var flheaders = ["Date","Time","Elapsed","Notes","Filename"];
var machinetime = fs.createReadStream("/laserPC/ProgramData/Kern\ Electronics/Kcam7/MachineTime.CSV");
var mtheaders = ["Date","Used","Percent","Idle","Percent","Total Seconds","Notes"];
var jobTime = csv.fromStream(filelog, {headers : flheaders});
var systemTime = csv.fromStream(machinetime, {headers : mtheaders});


// var getDate = function(data) { return data.Date; }
// var dates = new Object();
// dates = jobTime.on("data");
// systemTime.on("data", function(systemTimeData) { return systemTimeData.})
// var dates;

jobTime.on("data", getDate);

function getDate(data) { 
  console.log(data.Date);
}

// console.log(dates);

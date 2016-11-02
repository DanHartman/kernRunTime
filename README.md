sample csv files:
  laserFiles/
      FileLog.CSV
      MachineTime.CSV

Goals:
  transform MachineTime.CSV into an array formatted as:
    { date: 11/02/2016, seconds: 18800 },
    { date: 11/01/2016, seconds: 23212 }

  transform FileLog.CSV into an array formatted as:
    { date: 11/02/2016, job: 1, seconds: `Elapsed from H:MM:SS => seconds`},
    { date: 11/02/2016, job: 2, seconds: `Elapsed from H:MM:SS => seconds`},
    { date: 11/02/2016, job: 3, seconds: `Elapsed from H:MM:SS => seconds`},
    { date: 11/01/2016, job: 1, seconds: `Elapsed from H:MM:SS => seconds`},
    { date: 11/01/2016, job: 2, seconds: `Elapsed from H:MM:SS => seconds`}

  map over MachineTime array in such away that
    var runtime = 0;
    var totaltime = 0;
    for(var i = 0; i < mt.length; i++) {
      for(var j = 0; j < fl.length; j ++) {
        if mt[i].date === fl[j].date {
          runtime += fl[j].seconds
        }
        totaltime += mt[i].seconds - runtime
      }
    }



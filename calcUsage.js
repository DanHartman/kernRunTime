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

console.log(foo);
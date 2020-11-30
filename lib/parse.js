const splitBuildNumber = require('./split')

function parseBuildTime (build) {
  let { year, month, day, counter } = splitBuildNumber(build)

  // Convert the two-digit year to the full year
  year += 2000
  // Prepare the month to be accepted by the Date constructor
  month -= 1
  // Convert count of 2-minute intervals to minutes elapsed since midnight
  counter *= 2
  const hours = parseInt(counter / 60)
  const minutes = parseInt(counter % 60)

  return new Date(year, month, day, hours, minutes)
}

module.exports = parseBuildTime

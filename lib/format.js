const parseBuildTime = require('./parse')
const { pad2 } = require('./pad')

function formatBuildTime (date) {
  if (typeof date === 'string') {
    date = parseBuildTime(date)
  }
  const datePart = date.toDateString()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${datePart} ${pad2(hours)}:${pad2(minutes)}`
}

module.exports = formatBuildTime

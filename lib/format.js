'use strict'

const parseBuildTime = require('./parse')

function formatBuildTime (date) {
  if (typeof date === 'string') {
    date = parseBuildTime(date)
  }
  const text = date.toString()
  const lastColon = text.lastIndexOf(':')
  return text.substr(0, lastColon)
}

module.exports = formatBuildTime

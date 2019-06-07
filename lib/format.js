'use strict'

const parseBuildTime = require('./parse')
const sprintf = require('sprintf-js').sprintf

function formatBuildTime (date) {
  if (typeof date === 'string') {
    date = parseBuildTime(date)
  }
  const datePart = date.toDateString()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return sprintf('%s %02d:%02d', datePart, hours, minutes)
}

module.exports = formatBuildTime

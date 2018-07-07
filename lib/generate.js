'use strict'

const sprintf = require('sprintf-js').sprintf

function generateBuildNumber (options) {
  let build = getBuildStamp()

  options || (options = {})
  if (typeof options === 'string') {
    options = {version: options}
  }
  const version = options.version
  if (version) {
    const versionSeparator = options.versionSeparator || '.'
    build = version.trim() + versionSeparator.trim() + build
  }

  return build
}

function getBuildStamp () {
  const now = new Date()
  const year = now.getFullYear() % 100
  const month = now.getMonth() + 1
  const day = now.getDate()
  // Count 2-minute intervals elapsed since midnight:(HH * 60 + MM) / 2
  const counter = (now.getHours() * 60 + now.getMinutes()) / 2
  // Format the stamp as YYMMDDCCC
  return sprintf('%02d%02d%02d%03d', year, month, day, counter)
};

module.exports = generateBuildNumber

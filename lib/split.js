'use strict'

function splitBuildNumber (build) {
  const parts = /(\d{2})(\d{2})(\d{2})(\d{3})$/.exec(build.trim())
  if (!parts) {
    throw new Error('Build number has to end with "YYMMDDCCC".')
  }

  const year = parseInt(parts[1])
  const month = parseInt(parts[2])
  const day = parseInt(parts[3])
  const counter = parseInt(parts[4])
  if (!(year >= 0 && month >= 1 && month <= 12 && day >= 1 && day <= 31)) {
    throw new Error('Build number has to contain numbers formatting a date.')
  }

  return {
    year, month, day, counter
  }
}

module.exports = splitBuildNumber

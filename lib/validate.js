const splitBuildNumber = require('./split')

function validateBuildNumber (build) {
  try {
    splitBuildNumber(build)
    return true
  } catch (error) {
    return false
  }
}

module.exports = validateBuildNumber

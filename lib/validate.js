import splitBuildNumber from './split'

function validateBuildNumber (build) {
  try {
    splitBuildNumber(build)
    return true
  } catch (error) {
    return false
  }
}

export default validateBuildNumber

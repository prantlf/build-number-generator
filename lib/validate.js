import splitBuildNumber from './split'

export default function validateBuildNumber (build) {
  try {
    splitBuildNumber(build)
    return true
  } catch {
    return false
  }
}

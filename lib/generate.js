import { pad2, pad3 } from './pad'

function generateBuildNumber (options) {
  let build = getBuildStamp()

  options || (options = {})
  if (typeof options === 'string') {
    options = { version: options }
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
  const counter = parseInt((now.getHours() * 60 + now.getMinutes()) / 2)
  // Format the stamp as YYMMDDCCC
  return `${pad2(year)}${pad2(month)}${pad2(day)}${pad3(counter)}`
}

export default generateBuildNumber

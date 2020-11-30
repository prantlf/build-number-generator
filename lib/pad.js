function pad2 (value) {
  return value > 9 ? `${value}` : `0${value}`
}

function pad3 (value) {
  return value > 99 ? `${value}` : value > 9 ? `0${value}` : `00${value}`
}

module.exports = { pad2, pad3 }

export function pad2 (value) {
  return value > 9 ? `${value}` : `0${value}`
}

export function pad3 (value) {
  /* c8 ignore next */
  return value > 99 ? `${value}` : value > 9 ? `0${value}` : `00${value}`
}

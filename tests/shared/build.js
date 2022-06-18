import { sprintf } from 'sprintf-js'

export const date = new Date()
export const build = sprintf('%02d%02d%02d%03d', date.getFullYear() % 100,
  date.getMonth() + 1, date.getDate(),
  (date.getHours() * 60 + date.getMinutes()) / 2)

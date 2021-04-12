import { differenceInCalendarDays } from 'date-fns'

const FORMATTERS = {
  full: new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
  medium: new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
}

const SPECIAL_FORMATS = ['Aujourd’hui', 'Hier', 'Avant-hier']

export function formatDate(date, format, { refDate = new Date() } = {}) {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  if (typeof refDate === 'string') {
    refDate = new Date(refDate)
  }
  if (format) {
    return FORMATTERS[format].format(date)
  }
  const diff = differenceInCalendarDays(refDate, date)
  return SPECIAL_FORMATS[diff] || FORMATTERS.full.format(date)
}

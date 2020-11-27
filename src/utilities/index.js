export const filterAmount = (price, withSign = false, prefix = '') => {
  const formattedPrice = Math.abs(price)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  if (withSign) {
    const sign = price > 0 ? '+' : '-'

    return `${sign}$ ${formattedPrice}`
  }

  return `$${prefix}${formattedPrice}`
}

export const filterPercentages = (percentages) => {
  const sign = percentages > 0 ? '+' : null

  return sign + percentages + '%'
}

export const formatDate = (date) => {
  let d = date

  if (date instanceof Date) {
    d = new Date(date)
  }

  return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0]
}

export const formatDateWithTime = (date) => {
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  const time = ` ${hours}:${minutes}:${seconds}`

  return formatDate(date) + time
}

export const dateFromNow = (daysNum) => {
  const date = new Date()

  date.setDate(date.getDate() - daysNum)

  return date
}

export const getTransactionsFromDay = (transactions, day) =>
  transactions.filter((t) => t.time.split(' ')[0] === day).slice(0, 5)

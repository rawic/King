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

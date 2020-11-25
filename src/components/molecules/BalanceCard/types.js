import { theme } from 'theme/mainTheme'

const cardTypes = {
  incomes: {
    colors: {
      bg: 'hsl(143.2, 56.4%, 97.3%)',
      iconBg: 'hsl(97.9, 58.4%, 92.6%)',
      highlight: theme.success
    },
    arrowIcon: 'arrow-up',
    icon: 'chart-line',
    text: 'Income in this month'
  },
  outcomes: {
    colors: {
      bg: 'hsl(341.1, 100%, 98.3%)',
      iconBg: 'hsl(341.8, 100%, 94.9%)',
      highlight: theme.error
    },
    arrowIcon: 'arrow-down',
    icon: 'chart-area',
    text: 'Outcome in this month'
  },
  saved: {
    colors: {
      bg: 'hsl(227.7, 100%, 98.1%)',
      iconBg: 'hsl(225.8, 100%, 94.1%)',
      highlight: theme.highlight
    },
    arrowIcon: 'arrow-up',
    icon: 'piggy-bank',
    text: 'Saved in this month'
  }
}

export default cardTypes

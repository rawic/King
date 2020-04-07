import { theme } from 'theme/mainTheme'

const types = {
  income: {
    color: {
      bg: theme.successBg,
      dot: theme.highlight,
      text: theme.success
    },
    message: 'Income added'
  },
  outcome: {
    color: {
      bg: theme.errorBg,
      dot: theme.error,
      text: theme.error
    },
    message: 'Outcome added'
  }
}

export default types

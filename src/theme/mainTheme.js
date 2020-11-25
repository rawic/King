export const theme = {
  primary: 'hsl(0, 0%, 20%)',
  secondary: 'hsl(217, 31%, 69%)',
  tertiary: 'hsl(217, 35%, 37%)',
  highlight: 'hsl(226, 100%, 60%)',
  highlightDarker: 'hsl(226, 100%, 55%)',
  grey100: 'hsl(0, 0%, 98%)',
  grey200: 'hsl(0, 0%, 90%)',
  success: 'hsl(126, 76%, 39%)',
  successBg: 'hsl(85, 61%, 89%)',
  error: 'hsl(341, 100%, 64%)',
  errorBg: 'hsl(340, 100%, 96%)',
  fontFamily: {
    primary: '"Nunito", sans-serif'
  },
  fontSize: {
    xxxs: '1rem',
    xxs: '1.2rem',
    xs: '1.3rem',
    s: '1.4rem',
    sm: '1.5rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2.4rem'
  },
  fontWeight: {
    light: '300',
    regular: '400',
    bold: '600',
    extraBold: '700',
    black: '800'
  },
  zindex: {
    dropdown: '99'
  },
  transition: {
    duration: {
      default: '0.25s'
    }
  }
}

export const transactionTheme = {
  income: {
    colors: {
      bg: theme.successBg,
      dot: theme.highlight,
      text: theme.success
    }
  },
  outcome: {
    colors: {
      bg: theme.errorBg,
      dot: theme.error,
      text: theme.error
    }
  }
}

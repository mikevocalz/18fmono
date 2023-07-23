// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors: {
      onNeutralBg: 'var(--onNeutralBg)',
      neutralBg: 'var(--neutralBg)',
      onPrimaryBg: 'var(--onPrimaryBg)',
      primaryBg: 'var(--primaryBg)',
      primary: 'var(--primary)',
    },
  },
}

module.exports = {
  theme,
}

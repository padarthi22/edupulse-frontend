/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink:    '#15130F',
        paper:  '#F6F2EA',
        paper2: '#EFE9DE',
        line:   '#DCD3C2',
        muted:  '#6B665A',
        accent: '#B83A1E',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.022em',
        tight:    '-0.01em',
      },
      maxWidth: {
        prose: '32rem',
      },
    },
  },
  plugins: [],
};

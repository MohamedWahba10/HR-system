/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textprimary: '#757575',
        black: '#141414',
        primary: '#234895',
        primaryLight: '#205CD5',
        primaryLighter: '#3E8FF3',
        primaryhover: '#0085C0',
        secondary: 'var(--mui-palette-secondary-main)',
        error: 'var(--mui-palette-error-main)',
        errorLight: 'var(--mui-palette-error-lightOpacity)',
        errorLighter: 'var(--mui-palette-error-lighterOpacity)',
        warning: 'var(--mui-palette-warning-main)',
        info: 'var(--mui-palette-info-main)',
        success: 'var(--mui-palette-success-main)',
        textPrimary: 'var(--mui-palette-text-primary)',
        textSecondary: 'var(--mui-palette-text-secondary)',
        textDisabled: 'var(--mui-palette-text-disabled)',
        actionActive: 'var(--mui-palette-action-active)',
        actionSelected: 'var(--mui-palette-action-selected)',
        actionFocus: 'var(--mui-palette-action-focus)',
        backgroundPaper: '#ffffff',
        backgroundDefault: '#fafafa',
        backgroundChat: 'var(--mui-palette-customColors-chatBg)',
        backdrop: 'var(--backdrop-color)',
        facebook: '#4267B2',
        twitter: '#1DA1F2',
        linkedin: '#007BB6',
      },
      // fontFamily: {
      //   sans: ['Helvetica Neue', "Helvetica"," Arial", "sans-serif"],
      //   serif: ['var(--font-family-serif)', 'ui-serif', 'Georgia'],
      //   mono: ['var(--font-family-mono)', 'ui-monospace', 'SFMono-Regular'],
      // },
      fontFamily: {
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui'],  
      },
    boxShadow: {
        "3xl": "0px 4px 22px 0px rgba(78,59,151,0.14)",
        round: "1px 1px 6px 0px rgba(0,0,0,0.14)",
        "round-xl": "0px 0px 8px 1px rgba(0,0,0,0.2)",
    },
    backgroundImage: theme => ({
      // 'primary': 'linear-gradient(90deg,  #234895 0% , #0085C0 100%)',
      'primary-gradient': 'linear-gradient(90deg, #234895 0%, #1560A6 50%, #0085C0 100%)',

    }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

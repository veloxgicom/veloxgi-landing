import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#22E37E',
        brand600: '#19C56A',
        brand700: '#11A656',
        ink: '#0F172A',
        muted: '#6B7280',
        panel: '#F6F7F8',
        line: '#E5E7EB',
        dark: '#0A0D12',
      },
      boxShadow: {
        card: '0 10px 30px rgba(16,24,40,.06)',
      },
      borderRadius: {
        xl2: '28px',
        xl: '20px',
        lg: '12px',
      },
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        underline: 'underline .2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config



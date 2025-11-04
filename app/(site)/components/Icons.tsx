import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number }

export const ArrowRight = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ArrowDiag = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconCard = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const IconShield = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M12 3l7 3v6c0 4.5-3 8.5-7 9-4-0.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconCoin = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12h8M10 9h4M10 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IconPin = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const LogoGreen = (props: IconProps) => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" {...props} aria-hidden>
    <path d="M2 18l8-14 6 8 6-8 8 14" stroke="#22E37E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const LogoWhite = (props: IconProps) => (
  <svg width="36" height="26" viewBox="0 0 32 24" fill="none" {...props} aria-hidden>
    <path d="M2 18l8-14 6 8 6-8 8 14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)



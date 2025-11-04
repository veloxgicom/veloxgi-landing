import React from 'react'
import { ArrowRight } from './Icons'

type Props = {
  children: React.ReactNode
  href?: string
}

export default function ActionPill({ children, href = '#' }: Props) {
  return (
    <a href={href} className="group inline-flex items-center justify-between gap-3 bg-brand text-ink font-semibold px-6 py-3 rounded-full transition-transform focus-brand">
      <span>{children}</span>
      <span aria-hidden className="relative inline-flex items-center justify-center size-8 rounded-full bg-white/90 text-ink transition-transform group-hover:translate-x-0.5 group-hover:scale-105">
        <ArrowRight />
      </span>
    </a>
  )
}



"use client"
import React, { createContext, useContext, useState } from 'react'
import WaitlistModal from './WaitlistModal'

type WaitlistContextType = {
  openModal: () => void
  closeModal: () => void
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined)

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <WaitlistContext.Provider value={{ openModal, closeModal }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const context = useContext(WaitlistContext)
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider')
  }
  return context
}


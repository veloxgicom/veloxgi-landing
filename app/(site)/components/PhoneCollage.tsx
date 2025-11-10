"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const GALLERY_IMAGES = [
  { src: '/img/banner-1.webp', alt: 'Panel de control' },
  { src: '/img/banner-2.webp', alt: 'Dashboard principal' },
  { src: '/img/banner-3.webp', alt: 'Gestión de tiendas' },

]

export default function PhoneCollage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
        setIsTransitioning(false)
      }, 400) // Medio tiempo de la transición
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  // Crear stack de tarjetas (top direction: las de atrás se ven arriba)
  const getStackIndices = () => {
    const stack = []
    // Mostrar 3-4 tarjetas en el stack
    for (let i = 0; i < 4; i++) {
      const idx = (currentIndex + i) % GALLERY_IMAGES.length
      stack.push({ index: idx, position: i })
    }
    return stack
  }

  const stack = getStackIndices()

  return (
    <div className="relative  mx-auto">
      <div className="relative h-full w-full">
        {stack.map(({ index, position }) => {
          const img = GALLERY_IMAGES[index]
          const isTop = position === 0
          const isNext = position === 1
          
          // Top direction: las tarjetas de atrás están desplazadas hacia arriba
          const translateY = -position * 16 // Negativo para apilar hacia arriba
          const scale = 1 - (position * 0.04) // Cada tarjeta ligeramente más pequeña
          const zIndex = 10 - position // Mayor z-index para la tarjeta superior
          const opacity = isTop ? 1 : Math.max(0.3, 0.8 - (position * 0.15))

          // Efecto de transición: la tarjeta actual sale hacia arriba, la siguiente entra desde abajo
          const transitionY = isTop && isTransitioning 
            ? -40 // La tarjeta actual sale hacia arriba
            : !isTop && isNext && isTransitioning
            ? 40 // La siguiente entra desde abajo
            : translateY

          return (
            <div
              key={`${index}-${currentIndex}-${position}`}
              className="absolute inset-0 transition-all duration-600 ease-in-out"
              style={{
                zIndex,
                transform: `scale(${scale}) translateY(${transitionY}px)`,
                opacity: isTop && isTransitioning ? 0 : opacity,
              }}
            >
              {/* Tarjeta glassmorphism */}
              <div className="relative  rounded-[32px] overflow-hidden backdrop-blur-xl bg-white/80 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  
                  className="object-cove p-4"
                 
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}



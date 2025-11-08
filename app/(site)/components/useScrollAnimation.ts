import { useState, useEffect, useRef } from 'react'

type AnimationDirection = 'fade' | 'up' | 'down' | 'left' | 'right'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  direction?: AnimationDirection
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    direction = 'fade',
    delay = 0,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, delay])

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-8'
        case 'down':
          return 'opacity-0 -translate-y-8'
        case 'left':
          return 'opacity-0 -translate-x-8'
        case 'right':
          return 'opacity-0 translate-x-8'
        default:
          return 'opacity-0'
      }
    }
    
    switch (direction) {
      case 'up':
        return 'opacity-100 translate-y-0'
      case 'down':
        return 'opacity-100 translate-y-0'
      case 'left':
        return 'opacity-100 translate-x-0'
      case 'right':
        return 'opacity-100 translate-x-0'
      default:
        return 'opacity-100'
    }
  }

  return { ref, isVisible, animationClasses: getAnimationClasses() }
}


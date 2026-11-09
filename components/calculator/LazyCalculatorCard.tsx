'use client'
import { useRef, useState, useEffect } from 'react'

interface LazyCalculatorCardProps {
  children: React.ReactNode
  index: number
}

export function LazyCalculatorCard({ children, index }: LazyCalculatorCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: isVisible ? `${Math.min(index * 50, 300)}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

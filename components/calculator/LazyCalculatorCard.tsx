'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LazyCalculatorCardProps {
  children: React.ReactNode
  index: number
}

export function LazyCalculatorCard({ children, index }: LazyCalculatorCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="h-[180px] rounded-xl bg-muted/30 animate-pulse" />
      )}
    </div>
  )
}

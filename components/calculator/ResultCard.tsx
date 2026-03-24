'use client'

import { useEffect, useRef, useState } from 'react'
import { cn, formatCurrency, formatNumber, formatPercent } from '@/lib/utils'

interface ResultCardProps {
  label: string
  value: number
  format?: 'currency' | 'percent' | 'number'
  locale?: string
  variant?: 'primary' | 'success' | 'warning' | 'muted'
  detail?: string
}

const variantStyles: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: 'bg-primary/5',
    text: 'text-primary',
    border: 'border-primary/20',
  },
  success: {
    bg: 'bg-emerald-500/5',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/20',
  },
  warning: {
    bg: 'bg-amber-500/5',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/20',
  },
  muted: {
    bg: 'bg-muted/50',
    text: 'text-foreground',
    border: 'border-border',
  },
}

function useCountUp(target: number, duration: number = 600): number {
  const [current, setCurrent] = useState(0)
  const prevTarget = useRef(target)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const from = prevTarget.current
    prevTarget.current = target

    if (from === target) {
      setCurrent(target)
      return
    }

    const start = performance.now()
    const diff = target - from

    function animate(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(from + diff * eased)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [target, duration])

  return current
}

function formatValue(
  value: number,
  format: 'currency' | 'percent' | 'number',
  locale: string
): string {
  switch (format) {
    case 'currency':
      return formatCurrency(value, 'UZS', locale)
    case 'percent':
      return formatPercent(value)
    case 'number':
    default:
      return formatNumber(value, locale)
  }
}

export function ResultCard({
  label,
  value,
  format = 'currency',
  locale = 'ru',
  variant = 'primary',
  detail,
}: ResultCardProps) {
  const animatedValue = useCountUp(value)
  const styles = variantStyles[variant]

  return (
    <div
      className={cn(
        'rounded-xl border p-4 transition-all',
        styles.bg,
        styles.border
      )}
    >
      <p className="text-sm font-medium text-muted-foreground mb-1">
        {label}
      </p>
      <p
        className={cn(
          'text-2xl font-bold tracking-tight tabular-nums',
          styles.text
        )}
      >
        {formatValue(
          format === 'percent' ? animatedValue : Math.round(animatedValue),
          format,
          locale
        )}
      </p>
      {detail && (
        <p className="text-xs text-muted-foreground mt-1.5">{detail}</p>
      )}
    </div>
  )
}

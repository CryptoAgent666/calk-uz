'use client'

import { useCallback, useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

interface InputFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  suffix?: string
  type?: 'number' | 'text'
  min?: number
  max?: number
  tooltip?: string
  placeholder?: string
  className?: string
}

function formatWithThousands(val: string): string {
  const cleaned = val.replace(/[^\d.,\-]/g, '')
  const parts = cleaned.split(/[.,]/)
  const intPart = parts[0] || ''
  const decPart = parts.length > 1 ? parts[1] : null

  const negative = intPart.startsWith('-')
  const digits = intPart.replace(/\D/g, '')

  const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  const prefix = negative ? '-' : ''

  if (decPart !== null) {
    return `${prefix}${formatted},${decPart}`
  }
  return `${prefix}${formatted}`
}

function stripFormatting(val: string): string {
  return val.replace(/\s/g, '').replace(',', '.')
}

export function InputField({
  label,
  value,
  onChange,
  suffix,
  type = 'number',
  min,
  max,
  tooltip,
  placeholder,
  className,
}: InputFieldProps) {
  const id = useId()

  const displayValue =
    type === 'number' ? formatWithThousands(value) : value

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value

      if (type === 'number') {
        const stripped = stripFormatting(raw)
        // Allow empty, minus, or partial decimal input
        if (stripped === '' || stripped === '-' || stripped === '.' || stripped === '-.') {
          onChange(stripped)
          return
        }
        const num = parseFloat(stripped)
        if (isNaN(num)) return
        if (min !== undefined && num < min) return
        if (max !== undefined && num > max) return
        onChange(stripped)
      } else {
        onChange(raw)
      }
    },
    [type, min, max, onChange]
  )

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center gap-1.5">
        <Label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </Label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={tooltip}
                  >
                    <Info className="size-3.5" />
                  </button>
                }
              />
              <TooltipContent>
                <p className="max-w-xs text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        <Input
          id={id}
          type="text"
          inputMode={type === 'number' ? 'decimal' : 'text'}
          value={displayValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            'h-10 rounded-lg border-border bg-background px-3 text-base transition-all',
            'focus-visible:border-primary focus-visible:ring-primary/30',
            'hover:border-primary/50',
            suffix && 'pr-16'
          )}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground pointer-events-none select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}

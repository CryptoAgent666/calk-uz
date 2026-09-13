import * as icons from 'lucide-react'

interface DynamicIconProps {
  name: string
  className?: string
  size?: number
}

export function DynamicIcon({ name, className, size }: DynamicIconProps) {
  const Icon =
    (icons as unknown as Record<string, icons.LucideIcon>)[name] ||
    icons.Calculator
  return <Icon className={className} size={size} />
}

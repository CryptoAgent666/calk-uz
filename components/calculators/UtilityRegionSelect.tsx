'use client'

import { useLocale } from 'next-intl'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { UTILITY_REGIONS } from '@/lib/constants/utility-regions'

export default function UtilityRegionSelect({
  id,
  value,
  onChange,
}: {
  id?: string
  value: string
  onChange: (regionId: string) => void
}) {
  const locale = useLocale()
  const items = UTILITY_REGIONS.map((region) => ({
    value: region.id,
    label: locale === 'uz' ? region.nameUz : region.nameRu,
  }))

  return (
    <Select
      items={items}
      value={value}
      onValueChange={(next) => {
        if (typeof next === 'string') onChange(next)
      }}
    >
      <SelectTrigger id={id} className="mt-1 w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

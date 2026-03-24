'use client'

import { useState, useEffect } from 'react'

export interface CurrencyRate {
  code: string
  name: string
  nameUz: string
  rate: number
  nominal: number
  diff: string
  date: string
}

interface UseCurrencyRatesReturn {
  rates: CurrencyRate[]
  loading: boolean
  error: string | null
  lastUpdated: string | null
}

export function useCurrencyRates(): UseCurrencyRatesReturn {
  const [rates, setRates] = useState<CurrencyRate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchRates() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/exchange-rates')

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.message || data.error)
        }

        if (!cancelled) {
          setRates(data.rates)
          setLastUpdated(data.lastUpdated)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch rates')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchRates()

    return () => {
      cancelled = true
    }
  }, [])

  return { rates, loading, error, lastUpdated }
}

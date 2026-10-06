'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
  locale?: string
}

interface State {
  hasError: boolean
}

const TEXTS = {
  uz: {
    title: 'Xatolik yuz berdi',
    description: 'Kalkulyatorda kutilmagan xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
    retry: 'Qaytadan urinish',
  },
  ru: {
    title: 'Произошла ошибка',
    description: 'В калькуляторе произошла непредвиденная ошибка. Пожалуйста, попробуйте снова.',
    retry: 'Попробовать снова',
  },
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Calculator error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      const t = this.props.locale === 'uz' ? TEXTS.uz : TEXTS.ru

      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 mb-4">
            <AlertTriangle className="h-7 w-7 text-destructive" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {t.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mb-6">
            {t.description}
          </p>
          <Button variant="outline" size="default" onClick={this.handleRetry}>
            <RotateCcw className="h-4 w-4" data-icon="inline-start" />
            {t.retry}
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

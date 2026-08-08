'use client'

import { useCallback } from 'react'
import { useLocale } from 'next-intl'
import { Printer, Link2, Share2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/toast-simple'

const LABELS = {
  uz: {
    print: 'Chop etish',
    copy: 'Havolani nusxalash',
    copied: 'Nusxalandi!',
    share: 'Ulashish',
    telegram: 'Telegramda ulashish',
  },
  ru: {
    print: 'Печать',
    copy: 'Копировать ссылку',
    copied: 'Скопировано!',
    share: 'Поделиться',
    telegram: 'Поделиться в Telegram',
  },
}

export function SharePrintButtons() {
  const locale = useLocale()
  const { toast } = useToast()
  const t = locale === 'uz' ? LABELS.uz : LABELS.ru

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast(t.copied, 'success')
    } catch {
      toast(t.copied, 'error')
    }
  }, [toast, t.copied])

  const handleShare = useCallback(async () => {
    const shareData = {
      title: document.title,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          await handleCopyLink()
        }
      }
    } else {
      await handleCopyLink()
    }
  }, [handleCopyLink])

  const handleTelegram = useCallback(() => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(document.title)
    window.open(
      `https://t.me/share/url?url=${url}&text=${text}`,
      '_blank',
      'noopener,noreferrer'
    )
  }, [])

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handlePrint}
                aria-label={t.print}
              />
            }
          >
            <Printer className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>{t.print}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopyLink}
                aria-label={t.copy}
              />
            }
          >
            <Link2 className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>{t.copy}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleShare}
                aria-label={t.share}
              />
            }
          >
            <Share2 className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>{t.share}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleTelegram}
                aria-label={t.telegram}
              />
            }
          >
            <Send className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>{t.telegram}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

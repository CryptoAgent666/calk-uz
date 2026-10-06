import { ImageResponse } from 'next/og'
import { CALCULATOR_COUNT } from '@/lib/data/calculators'

export const runtime = 'edge'
export const alt = 'Calk.UZ — Bepul onlayn kalkulyatorlar'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isUz = locale === 'uz'

  const tagline = isUz
    ? 'Bepul onlayn kalkulyatorlar'
    : 'Бесплатные онлайн-калькуляторы'
  const countLabel = isUz
    ? `${CALCULATOR_COUNT}+ kalkulyator · Oʻzbekiston uchun`
    : `${CALCULATOR_COUNT}+ калькуляторов · для Узбекистана`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #00A86B 0%, #0F3460 100%)',
          padding: '64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Geometric pattern overlay for Uzbek identity */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            opacity: 0.08,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`col-${i}`}
              style={{ display: 'flex', flexDirection: 'column', width: '150px' }}
            >
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={`cell-${i}-${j}`}
                  style={{
                    width: '120px',
                    height: '120px',
                    border: '2px solid white',
                    borderRadius: '8px',
                    margin: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(45deg)',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid white',
                      borderRadius: '50%',
                      display: 'flex',
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Brand row — top left */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '2px solid rgba(255,255,255,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            🧮
          </div>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1.5px',
            }}
          >
            Calk.UZ
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '76px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              maxWidth: '1000px',
              marginBottom: '28px',
              display: 'flex',
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50px',
              padding: '14px 30px',
              fontSize: '30px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.92)',
            }}
          >
            {countLabel}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #F5A623 0%, #00A86B 50%, #F5A623 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

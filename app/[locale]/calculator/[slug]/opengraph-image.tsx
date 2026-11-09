import { ImageResponse } from 'next/og'
import { getCalculatorBySlug } from '@/lib/data/calculators'
import { CATEGORIES } from '@/lib/data/categories'

export const runtime = 'edge'
export const alt = 'Calk.UZ Calculator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const calc = getCalculatorBySlug(slug)

  if (!calc) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #00A86B 0%, #0F3460 100%)',
            color: 'white',
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          Calk.UZ
        </div>
      ),
      { ...size }
    )
  }

  const title = locale === 'uz' ? calc.titleUz : calc.titleRu
  const description = locale === 'uz' ? calc.descriptionUz : calc.descriptionRu
  const category = CATEGORIES[calc.category]
  const categoryName = locale === 'uz' ? category.nameUz : category.nameRu

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #00A86B 0%, #0F3460 100%)',
          padding: '60px',
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
          {/* Diamond pattern - row 1 */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`col-${i}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '150px',
              }}
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

        {/* Calk.UZ branding - top right corner */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.5px',
            }}
          >
            Calk.UZ
          </span>
        </div>

        {/* Main content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Category badge */}
          <div
            style={{
              display: 'flex',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50px',
                padding: '10px 24px',
                fontSize: '20px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.5px',
              }}
            >
              {categoryName}
            </div>
          </div>

          {/* Calculator title */}
          <div
            style={{
              fontSize: title.length > 30 ? '52px' : '62px',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.15,
              maxWidth: '900px',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            {title}
          </div>

          {/* Description text */}
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.5,
              maxWidth: '800px',
              display: 'flex',
            }}
          >
            {description.length > 120
              ? description.slice(0, 120) + '...'
              : description}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #F5A623 0%, #00A86B 50%, #F5A623 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'VisiUI'
  const description = searchParams.get('description') || 'Create faster and better websites'

  const fontData = await fetch(
    new URL('/app/api/og/Inter-Regular.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #FF00FF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00FFFF 0%, transparent 50%)',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(255,255,255,0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #FF00FF, #00FFFF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#FFF',
              textAlign: 'center',
              margin: '0 20px 40px',
              maxWidth: '800px',
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {['Contact Form', 'Search Bar', 'Code Window'].map((comp, i) => (
              <div
                key={i}
                style={{
                  width: '200px',
                  height: '120px',
                  background: `linear-gradient(135deg, rgba(255,0,255,${0.7 + i * 0.1}), rgba(0,255,255,${
                    0.7 + i * 0.1
                  }))`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                }}
              >
                {comp}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '24px',
            color: 'white',
            opacity: 0.7,
          }}
        >
          visiui.org
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
            name: "Inter",
            data: fontData,
            style: "normal",
        },
      ],
    },
  );
}
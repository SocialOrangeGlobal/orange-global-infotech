import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = 'Orange Global Infotech - Digital Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public', 'logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #f3f4f6 2%, transparent 0%), radial-gradient(circle at 75px 75px, #f3f4f6 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <img src={logoSrc} width={300} style={{ objectFit: 'contain' }} />
        </div>

        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#111111',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 0 30px 0',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}
        >
          Building Future-Ready Software for Modern Businesses
        </h1>

        <p style={{ fontSize: 36, color: '#4b5563', textAlign: 'center', maxWidth: '850px', margin: 0, lineHeight: 1.4 }}>
          Transforming Ideas Into Powerful Digital Solutions
        </p>

        <div style={{ display: 'flex', marginTop: '60px', gap: '24px' }}>
          <div style={{ padding: '12px 32px', backgroundColor: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00', borderRadius: '100px', fontSize: 26, fontWeight: 700, border: '2px solid rgba(255, 107, 0, 0.2)' }}>
            Web Apps
          </div>
          <div style={{ padding: '12px 32px', backgroundColor: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00', borderRadius: '100px', fontSize: 26, fontWeight: 700, border: '2px solid rgba(255, 107, 0, 0.2)' }}>
            Mobile Apps
          </div>
          <div style={{ padding: '12px 32px', backgroundColor: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00', borderRadius: '100px', fontSize: 26, fontWeight: 700, border: '2px solid rgba(255, 107, 0, 0.2)' }}>
            AI Solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

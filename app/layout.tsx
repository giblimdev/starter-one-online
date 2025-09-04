// @/app/layout.tsx
// Rôle : Layout global de l’application Next.js 13+ App Router
// Intègre le contenu de chaque page et affiche la bannière cookies client-only,
// centrée avec un design soigné et accessibilité.

import './globals.css'
import React from 'react'
import CookieConsentClient from '../components/CookieConsentClient'
import Header from '@/components/layout/header/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
        <Header />
        {children}

        <div 
          aria-live="polite" 
          style={{
            position: 'fixed',
            bottom: 16,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none',  
            zIndex: 1000,
          }}
        >
          <div style={{ pointerEvents: 'auto', width: 'clamp(320px, 90%, 600px)' }}>
            <CookieConsentClient />
          </div>
        </div>

      </body>
    </html>
  )
}

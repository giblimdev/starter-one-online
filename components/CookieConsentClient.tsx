// components/CookieConsentClient.tsx
// Rôle : Composant React client-only affichant la bannière cookies.
// En dev elle s'affiche toujours, en prod selon cookie via react-cookie-consent.

'use client'

import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"

export default function CookieConsentClient() {
  const isDev = process.env.NODE_ENV === 'development'
  const [consent, setConsent] = useState({
    necessary: true,
    statistics: false,
    marketing: false,
  })

  // Toggle catégorie sauf nécessaire
  function toggleCategory(category: keyof typeof consent) {
    if (category === 'necessary') return
    setConsent(prev => ({ ...prev, [category]: !prev[category] }))
  }

  // Sauvegarder et fermer (intégration possible avec cookie ici)
  function saveConsent() {
    // Save logic à implémenter selon besoin
  }

  // En dev : bannière simple toujours visible
  if (isDev) {
    return (
      <CookieConsent
        location="bottom"
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        enableDeclineButton
        cookieName="mySiteCookieConsent"
        style={{ backgroundColor: "rgb(17 24 39)" }} // bg-gray-900
        buttonStyle={{ backgroundColor: "rgb(34 197 94)", color: "white" }} // bg-green-500 text-white
        declineButtonStyle={{ backgroundColor: "rgb(220 38 38)", color: "white" }} // bg-red-600 text-white
        expires={150}
        flipButtons
        overlay
      >
        <span className="text-gray-100">
          Ce site utilise des cookies pour améliorer votre expérience.{' '}
          <Link href="/privacy-policy" className="text-yellow-400 underline">
            En savoir plus
          </Link>
        </span>
      </CookieConsent>
    )
  }

  // En prod : bannière avec réglages avancés et Schadcn UI
  return (
    <CookieConsent
      location="bottom"
      buttonText="J’accepte tous"
      declineButtonText="Je refuse tous"
      enableDeclineButton
      cookieName="mySiteCookieConsent"
      style={{ backgroundColor: "rgb(17 24 39)", padding: "1.5rem" }}
      buttonStyle={{ backgroundColor: "rgb(34 197 94)", color: "white" }}
      declineButtonStyle={{ backgroundColor: "rgb(220 38 38)", color: "white" }}
      expires={150}
      flipButtons
      overlay
      onAccept={() => setConsent({ necessary: true, statistics: true, marketing: true })}
      onDecline={() => setConsent({ necessary: true, statistics: false, marketing: false })}
      disableStyles
    >
      <div className="flex flex-col gap-4 text-gray-100 max-w-xl mx-auto">
        <p>
          Ce site utilise des cookies pour améliorer votre expérience.{' '}
          <Link href="/privacy-policy" className="text-yellow-400 underline">
            En savoir plus
          </Link>
        </p>

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              Personnaliser les cookies
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-3 bg-gray-800 rounded-md p-4">
            <div className="flex items-center space-x-3">
              <Checkbox checked disabled />
              <label className="text-gray-300 cursor-default">Cookies nécessaires (toujours actifs)</label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={consent.statistics}
                onCheckedChange={() => toggleCategory('statistics')}
              />
              <label className="text-gray-300 cursor-pointer">Cookies de performance et statistiques</label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={consent.marketing}
                onCheckedChange={() => toggleCategory('marketing')}
              />
              <label className="text-gray-300 cursor-pointer">Cookies marketing</label>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="secondary"
                onClick={() => window.location.reload()} // Simule l'annulation simple
              >
                Annuler
              </Button>
              <Button
                onClick={() => {
                  saveConsent()
                  // Ici vous pouvez déclencher la fermeture de la bannière, ex: window.location.reload() ou un état
                }}
              >
                Enregistrer mes choix
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </CookieConsent>
  )
}

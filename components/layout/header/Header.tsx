// @/components/layout/header/Header.tsx
"use client"
import React from "react"

import Logo from "./Logo"
import MainNav from "./MainNav"
import IsConnected from "./IsConnected"

export default function Header() {
  // Placeholder click handler pour IsConnected
  const handleUserClick = () => {
    // Exemple action : afficher menu utilisateur, rediriger, etc.
    alert("Clique sur l'avatar")
  }

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <MainNav />
          </div>
          <div>
            <IsConnected onClick={handleUserClick} />
          </div>
        </div>
      </div>
    </header>
  )
}

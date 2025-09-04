// @/components/layout/header/IsConnected.tsx

"use client"

import React from "react"
import { User2 } from "lucide-react"

type IsConnectedProps = {
  avatarUrl?: string | null
  username?: string
  onClick?: () => void
}

export default function IsConnected({
  avatarUrl = null,
  username = "Utilisateur",
  onClick,
}: IsConnectedProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Compte utilisateur"
      title={username}
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${username} avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-500">
            <User2 size={20} />
          </div>
        )}
        <span className="absolute -bottom-0.5 -right-0.5 bg-indigo-500 rounded-full p-1 border border-white">
          <User2 size={12} color="white" />
        </span>
      </div>
    </button>
  )
}

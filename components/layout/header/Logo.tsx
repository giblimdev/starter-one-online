// @/components/layout/header/Logo.tsx

import React from "react"
import { appName } from "@/lib/appSettings"

export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none">
        {appName}
      </span>
    </div>
  )
}

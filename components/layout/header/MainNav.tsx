// @/components/layout/header/MainNav.tsx

import React from "react"
import Link from "next/link"

const navLinks = [
  { order: 1, label: "Accueil", href: "/" },
  { order: 2, label: "Dev", href: "/dev" },
]

export default function MainNav() {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navLinks
          .sort((a, b) => a.order - b.order)
          .map(({ order, label, href }) => (
            <li key={order}>
              <Link
                href={href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

// app/api/helpdev/reorder/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const { id, direction } = await req.json()

  const item = await prisma.helpDev.findUnique({ where: { id } })
  if (!item) return NextResponse.json({ error: "Item non trouvé" }, { status: 404 })

  // Trouver l'item à échanger selon direction
  const swapWith = await prisma.helpDev.findFirst({
    where: {
      order: direction === "up" ? { lt: item.order } : { gt: item.order },
    },
    orderBy: {
      order: direction === "up" ? "desc" : "asc",
    },
  })

  if (!swapWith) return NextResponse.json({ success: true }) // Rien à faire

  // Échanger les ordres
  await prisma.$transaction([
    prisma.helpDev.update({ where: { id: item.id }, data: { order: swapWith.order } }),
    prisma.helpDev.update({ where: { id: swapWith.id }, data: { order: item.order } }),
  ])

  return NextResponse.json({ success: true })
}

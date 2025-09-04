// app/api/helpdev/route.ts

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/helpdev
export async function GET() {
  const items = await prisma.helpDev.findMany({
    orderBy: { order: "asc" },
  })
  return NextResponse.json(items)
}

// POST /api/helpdev
export async function POST(req: NextRequest) {
  const { title, section, order, parentId } = await req.json()
  const item = await prisma.helpDev.create({
    data: {
      title,
      section,
      order,
      parentId,
    },
  })
  return NextResponse.json(item)
}

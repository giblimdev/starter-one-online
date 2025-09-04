// app/api/helpdev/[id]/route.ts

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { title, section, order, parentId } = await req.json()
  const item = await prisma.helpDev.update({
    where: { id: params.id },
    data: { title, section, order, parentId },
  })
  return NextResponse.json(item)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.helpDev.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}

// @/lib/prisma.ts

import { PrismaClient } from "@/lib/generated/prisma/client"

declare global {
  // Permet d’éviter la recréation multiple du client Prisma lors du hot-reload en dev
  // @ts-ignore
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "info", "warn", "error"] : [],
  })

if (process.env.NODE_ENV === "development") global.prisma = prisma

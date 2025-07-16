// @/lib/auth/types.ts
import type {
  User as BetterAuthUser,
  Session as BetterAuthSession,
} from "better-auth";

// Extension des types BetterAuth via module augmentation SANS conflit
declare module "better-auth" {}

// Types personnalisés avec propriétés optionnelles
export interface CustomUser extends BetterAuthUser {
  role: string;
}

export interface CustomSession extends BetterAuthSession {
  user: CustomUser;
}

export type UserRole = "admin" | "author" | "user";

// Helper pour créer un utilisateur avec rôle par défaut
export const createUserWithRole = (
  user: BetterAuthUser,
  role: string = "user"
): CustomUser => {
  return {
    ...user,
    role,
  };
};

// Type guard pour vérifier si un utilisateur a un rôle
export const hasRole = (
  user: CustomUser
): user is CustomUser & { role: string } => {
  return user.role !== undefined;
};

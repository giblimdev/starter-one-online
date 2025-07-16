// @/lib/auth/auth-client.ts
import { createAuthClient } from "better-auth/react";
import type { CustomUser, CustomSession } from "./types";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.BETTER_AUTH_URL || "http://localhost:3000";
};

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});

// Exports de base
export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const signOut = authClient.signOut;
export const getSession = authClient.getSession;

// Hook personnalisé avec types sécurisés
export const useSession = () => {
  const session = authClient.useSession();

  return {
    ...session,
    data: session.data
      ? {
          ...session.data,
          user: session.data.user as CustomUser,
        }
      : null,
  };
};

// Hook spécifique pour l'utilisateur
export const useUser = () => {
  const { data: session, isPending, error } = useSession();

  return {
    user: session?.user || null,
    isPending,
    error,
    isAuthenticated: !!session?.user,
  };
};

// Hook pour vérifier les rôles
export const useRole = () => {
  const { user } = useUser();

  return {
    user,
    role: user?.role || "user",
    isAdmin: user?.role === "admin",
    isAuthor: user?.role === "author" || user?.role === "admin",
    isUser: !!user,
  };
};

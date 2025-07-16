// @/app/infoConnect/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession, useUser, useRole, signOut } from "@/lib/auth/auth-client";
import { useEffect } from "react";

export default function InfoConnectPage() {
  const router = useRouter();
  const { data: session, isPending, error } = useSession();
  const { user, isAuthenticated } = useUser();
  const { role, isAdmin, isAuthor } = useRole();

  // Redirection si non authentifié
  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isPending, isAuthenticated, router]);

  // Gestion de la déconnexion
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  // État de chargement
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des informations...</p>
        </div>
      </div>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">Erreur de connexion</p>
            <p className="text-sm">{error.message}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  // Utilisateur non connecté
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Accès non autorisé
          </h1>
          <p className="text-gray-600 mb-6">
            Vous devez être connecté pour accéder à cette page.
          </p>
          <button
            onClick={() => router.push("/auth/sign-in")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">InfoConnect</h1>
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {role}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Connecté en tant que: {user.name || user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations utilisateur */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Informations de connexion
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">
                    ID Utilisateur
                  </span>
                  <span className="text-sm text-gray-900">{user.id}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">Nom</span>
                  <span className="text-sm text-gray-900">
                    {user.name || "Non renseigné"}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">
                    Email
                  </span>
                  <span className="text-sm text-gray-900">{user.email}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">
                    Email vérifié
                  </span>
                  <span
                    className={`text-sm ${
                      user.emailVerified ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.emailVerified ? "Oui" : "Non"}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">
                    Rôle
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      role === "admin"
                        ? "bg-red-100 text-red-800"
                        : role === "author"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {role}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium text-gray-500">
                    Membre depuis
                  </span>
                  <span className="text-sm text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-gray-500">
                    Dernière mise à jour
                  </span>
                  <span className="text-sm text-gray-900">
                    {new Date(user.updatedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions et permissions */}
          <div className="space-y-6">
            {/* Actions rapides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actions rapides
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
                >
                  Modifier le profil
                </button>

                {isAuthor && (
                  <button
                    onClick={() => router.push("/dashboard/author")}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                  >
                    Panneau Auteur
                  </button>
                )}

                {isAdmin && (
                  <button
                    onClick={() => router.push("/dashboard/admin")}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                  >
                    Panneau Admin
                  </button>
                )}
              </div>
            </div>

            {/* Permissions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Permissions
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Utilisateur</span>
                  <span className="text-green-600">✓</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Auteur</span>
                  <span
                    className={isAuthor ? "text-green-600" : "text-gray-400"}
                  >
                    {isAuthor ? "✓" : "✗"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Admin</span>
                  <span
                    className={isAdmin ? "text-green-600" : "text-gray-400"}
                  >
                    {isAdmin ? "✓" : "✗"}
                  </span>
                </div>
              </div>
            </div>

            {/* Informations de session */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Session
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">État</span>
                  <span className="text-green-600 text-sm">Connecté</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Authentifié</span>
                  <span className="text-green-600 text-sm">
                    {isAuthenticated ? "Oui" : "Non"}
                  </span>
                </div>

                {session?.session?.id && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ID Session</span>
                    <span className="text-xs text-gray-500 truncate max-w-24">
                      {session.session.id}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Message de bienvenue */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Bienvenue sur InfoConnect, {user.name || user.email}!
          </h2>
          <p className="text-blue-800">
            Vous êtes connecté avec succès à votre compte. Cette page affiche
            toutes les informations de votre session actuelle et vos permissions
            dans l'application.
          </p>
        </div>
      </main>
    </div>
  );
}

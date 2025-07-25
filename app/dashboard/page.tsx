// src/app/dashboard/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth/auth-client";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending)
    return <p className="text-center mt-8 text-white">Chargement...</p>;
  if (!session?.user)
    return <p className="text-center mt-8 text-white">Redirection...</p>;

  const { user } = session;

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Bienvenue, {user.name || "Utilisateur"}!</p>
      <p>Email: {user.email}</p>
      <p>Rôle: {user.role}</p>

      <div className="space-y-2">
        {user.role === "admin" && (
          <button
            onClick={() => router.push("/dashboard/admin")}
            className="w-full bg-red-600 text-white font-medium rounded-md px-4 py-2 hover:bg-red-700"
          >
            Panneau Admin
          </button>
        )}

        {(user.role === "author" || user.role === "admin") && (
          <button
            onClick={() => router.push("/dashboard/author")}
            className="w-full bg-green-600 text-white font-medium rounded-md px-4 py-2 hover:bg-green-700"
          >
            Panneau Auteur
          </button>
        )}
      </div>

      <button
        onClick={() => signOut()}
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        Se déconnecter
      </button>
    </main>
  );
}

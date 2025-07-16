// src/components/layout/Header.tsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-lg font-bold">MyApp</div>
      <nav>
        <Link href="/auth/sign-in">
          <Button>Sign In</Button>
        </Link>
      </nav>
    </header>
  );
}

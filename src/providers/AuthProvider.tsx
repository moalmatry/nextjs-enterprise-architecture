"use client";
import { SessionProvider } from "next-auth/react";

// I put auth provider here because SessionProvider uses react context under the hood
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}

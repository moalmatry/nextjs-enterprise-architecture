"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressbarProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar options={{ showSpinner: false }} color="#3b82f6" />
      {children}
    </>
  );
}

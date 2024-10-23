"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const currThem = theme === "dark" || theme === "system";
  const boxShadow = currThem
    ? "0px 16px 48px 0px rgba(255, 255, 255, 0.2) ,0px 0px 2px 0px rgba(255, 255, 255, 0.5)"
    : "0px 16px 48px 0px rgba(0, 0, 0, 0.1) ,0px 12px 16px 0px rgba(0, 0, 0, 0.1) ";

  return (
    <>
      {children}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px"
        }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            width: "268px",
            height: "56px",
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px",
            backgroundColor: currThem ? "black" : "whitesmoke",
            color: currThem ? "white" : "black",
            borderColor: currThem ? "white" : "transparent",
            borderRadius: 16,
            boxShadow
          }
        }}
      />
    </>
  );
}

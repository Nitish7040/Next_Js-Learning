// app/about/layout.tsx
import React from "react";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <div>Layout for About Page</div>
    </>
  );
}

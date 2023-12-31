"use client";

import { ThemeProvider } from "next-themes";

export default function Themes({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="data-theme">
      {children}
    </ThemeProvider>
  );
}

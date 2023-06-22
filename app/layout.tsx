"use client";
import "../style/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Akmal",
//   description: "My portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="data-theme">
          <Navbar />
          <Hero />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

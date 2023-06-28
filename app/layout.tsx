import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Themes from "../style/theme-provider";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata = {
  title: "Akmal Kamarudin | Software Developer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Themes>
          <Navbar />
          {children}
          <Footer />
        </Themes>
      </body>
    </html>
  );
}

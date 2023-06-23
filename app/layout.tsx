import "../style/globals.css";
import Themes from "../style/theme-provider";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  // display: "swap",
  variable: "--font-rubik",
});

export const metadata = {
  title: "Akmal's",
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
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body>
        <Themes>{children}</Themes>
      </body>
    </html>
  );
}

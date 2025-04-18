import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

// Import Montserrat
const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subset
  weight: ["400", "700"], // Ensure Regular and Bold weights are included
  variable: "--font-montserrat", // Define a CSS variable for Montserrat
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // Ensure the weights you need are included
  variable: "--font-libre-baskerville",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${libreBaskerville.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

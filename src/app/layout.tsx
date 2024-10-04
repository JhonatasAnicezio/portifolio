import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeProvider } from "@/context/ThemeMode";
import { Suspense } from "react";
import LoaderHeader from "../components/ux/LoaderHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhonatas Anicezio",
  description: "Portifolio Jhonatas Anicezio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeModeProvider>
          <Suspense fallback={<LoaderHeader />}>
            {children}
          </Suspense>
        </ThemeModeProvider>
      </body>
    </html>
  );
}

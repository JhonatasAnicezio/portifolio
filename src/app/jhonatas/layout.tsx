'use client'
import { ThemeModeProvider } from "@/context/ThemeMode";
import PageLayout from "./components/page-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ThemeModeProvider>
      <PageLayout>
        {children}
      </PageLayout>
    </ThemeModeProvider>
  );
}

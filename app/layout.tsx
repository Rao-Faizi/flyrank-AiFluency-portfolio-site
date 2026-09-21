import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Faizan | Business Automation & AI Engineer",
  description: "Automating manual business workflows using LLMs, custom web applications, and orchestration tools like N8N.",
  openGraph: {
    title: "Muhammad Faizan | Business Automation & AI Engineer",
    description: "Automating manual business workflows using LLMs, custom web applications, and orchestration tools like N8N.",
    url: "https://portfolio-site-vert-two-93.vercel.app/",
    siteName: "Muhammad Faizan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

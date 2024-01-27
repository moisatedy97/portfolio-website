import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { jsonLd } from "@/structured_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tedy Gabriel Moisa | Web Developer",
  description: "Tedy Gabriel Moisa Portfolio",
  keywords: [
    "web",
    "developer",
    "programmer",
    "typescript",
    "javascript",
    "java",
    "react",
    "springboot",
    "springsecurity",
    "stack",
    "server",
    "ssr",
    "oauth2",
    "otp",
    "nextjs",
    "vitejs",
    "docker",
    "mysql",
    "shadcnui",
    "zod",
    "zustand",
    "recoil",
  ],
  alternates: {
    canonical: "https://www.tedymoisa.it",
  },
  openGraph: {
    title: "Tedy Gabriel Moisa | Web Developer",
    description: "Tedy Gabriel Moisa Portfolio",
    type: "website",
    url: "https://www.tedymoisa.it",
    images: [
      "https://einycsizkkhmyrirulxi.supabase.co/storage/v1/object/sign/images/profile-pictures/tedy-logo-profile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZmlsZS1waWN0dXJlcy90ZWR5LWxvZ28tcHJvZmlsZS5wbmciLCJpYXQiOjE3MDYzODA0MTEsImV4cCI6MjAyMTc0MDQxMX0.oyX6p6P_ro51sRK1fupPczaAn2xC3EdRfQ_OFwA_ARE&t=2024-01-27T18%3A33%3A31.037Z",
    ],
    siteName: "Tedy Gabriel Moisa",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Tedy Gabriel Moisa | Web Developer</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={true}>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

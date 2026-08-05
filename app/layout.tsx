import type { Metadata } from "next";
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naufaldzaki.my.id"),
  title: {
    default: "Naufal Dzaki | Full Stack Engineer",
    template: "%s | Naufal Dzaki",
  },
  description:
    "Portfolio of Naufal Dzaki, an Information Systems student and Full Stack Engineer crafting digital experiences in UI/UX & Web Development.",
  keywords: [
    "Naufal Dzaki",
    "Full Stack Engineer",
    "Web Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Naufal Dzaki", url: "https://naufaldzaki.my.id" }],
  creator: "Naufal Dzaki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naufaldzaki.my.id",
    title: "Naufal Dzaki | Full Stack Engineer",
    description:
      "Portfolio of Naufal Dzaki, an Information Systems student and Full Stack Engineer crafting digital experiences in UI/UX & Web Development.",
    siteName: "Naufal Dzaki Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naufal Dzaki - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Dzaki | Full Stack Engineer",
    description:
      "Portfolio of Naufal Dzaki, an Information Systems student and Full Stack Engineer crafting digital experiences in UI/UX & Web Development.",
    images: ["/og-image.jpg"],
    creator: "@nopal_dzaki",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-full flex flex-col font-sans",
          manrope.variable,
          instrumentSerif.variable,
          ibmPlexMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

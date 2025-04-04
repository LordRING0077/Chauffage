import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Enhance SEO metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Chauffagiste Lyon - Expert en chauffage et plomberie",
    default: "Chauffagiste Lyon - Expert en chauffage et plomberie à Lyon et sa région",
  },
  description:
    "Services professionnels de chauffage et plomberie à Lyon et sa région. Installation, dépannage et entretien de chaudières, pompes à chaleur et systèmes de plomberie par des experts certifiés RGE.",
  keywords: [
    "chauffagiste Lyon",
    "plombier Lyon",
    "installation chaudière Lyon",
    "dépannage chauffage Lyon",
    "entretien chaudière Lyon",
    "pompe à chaleur Lyon",
    "plomberie Lyon",
    "chauffagiste certifié RGE",
    "réparation fuite eau Lyon",
    "installation sanitaire Lyon",
  ],
  authors: [{ name: "Chauffagiste Lyon" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.chauffagiste-lyon.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.chauffagiste-lyon.com",
    title: "Chauffagiste Lyon - Expert en chauffage et plomberie",
    description:
      "Services professionnels de chauffage et plomberie à Lyon et sa région. Installation, dépannage et entretien par des experts certifiés.",
    siteName: "Chauffagiste Lyon",
    images: [
      {
        url: "https://www.chauffagiste-lyon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffagiste Lyon - Services de chauffage et plomberie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffagiste Lyon - Expert en chauffage et plomberie",
    description:
      "Services professionnels de chauffage et plomberie à Lyon et sa région. Installation, dépannage et entretien par des experts certifiés.",
    images: ["https://www.chauffagiste-lyon.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


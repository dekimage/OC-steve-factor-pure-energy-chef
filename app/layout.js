import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pure Energy Chef - Steve Factor | Holistic Health Coach",
  description:
    "Vegan raw food recipes, wellness programs, and holistic health coaching by Steve Factor. Transform your health with pure energy nutrition.",
  keywords: "vegan, raw food, holistic health, wellness coach, detox, smoothies, recipes",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

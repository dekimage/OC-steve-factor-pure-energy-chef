import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Facebook } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-green-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-light text-green-800">
          Pure Energy Chef
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/book" className="text-gray-600 hover:text-green-600 transition-colors">
            Book
          </Link>
          <Link href="/programs" className="text-gray-600 hover:text-green-600 transition-colors">
            Programs
          </Link>
          <Link href="/recipes" className="text-gray-600 hover:text-green-600 transition-colors">
            Recipes
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

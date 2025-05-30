import Link from "next/link"
import { Youtube, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-green-50/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-xl font-light text-green-800 mb-4">Pure Energy Chef</h3>
          <p className="text-gray-600 mb-6">Transforming lives through pure energy nutrition</p>

          <div className="flex justify-center space-x-6 mb-6">
            <Link href="https://youtube.com" target="_blank" className="text-gray-600 hover:text-green-600">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-green-600">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="mailto:steve@pureenergyche.com" className="text-gray-600 hover:text-green-600">
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/book" className="hover:text-green-600">
              Book
            </Link>
            <Link href="/programs" className="hover:text-green-600">
              Programs
            </Link>
            <Link href="/recipes" className="hover:text-green-600">
              Recipes
            </Link>
            <Link href="/about" className="hover:text-green-600">
              About
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">© 2024 Pure Energy Chef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

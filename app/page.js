import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, ChefHat, User } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-light text-green-800 mb-4">Pure Energy Chef</h1>
        <p className="text-xl text-gray-600 mb-2">Steve Factor</p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Holistic Health Coach • Vegan Raw Food Expert • Wellness Guide
        </p>
      </section>

      {/* Main Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* E-Book Card */}
        <Link href="/book">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-green-100 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-green-800 mb-3">E-Book</h3>
              <p className="text-gray-600 mb-4">
                "Pure Energy Living" - Your complete guide to raw vegan transformation
              </p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Link>

        {/* Programs Card */}
        <Link href="/programs">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-green-100 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <Play className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-green-800 mb-3">Programs</h3>
              <p className="text-gray-600 mb-4">Guided wellness journeys including detox and smoothie challenges</p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Explore Programs
              </Button>
            </CardContent>
          </Card>
        </Link>

        {/* Recipes Card */}
        <Link href="/recipes">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-green-100 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <ChefHat className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-green-800 mb-3">Recipes</h3>
              <p className="text-gray-600 mb-4">Delicious raw vegan recipes for vibrant health and energy</p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Recipes
              </Button>
            </CardContent>
          </Card>
        </Link>

        {/* About Card */}
        <Link href="/about">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-green-100 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-green-800 mb-3">About Steve</h3>
              <p className="text-gray-600 mb-4">Meet your holistic health coach and pure energy guide</p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                My Story
              </Button>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Quick CTA */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">Ready to transform your health?</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">Start Your Journey</Button>
      </section>
    </div>
  )
}

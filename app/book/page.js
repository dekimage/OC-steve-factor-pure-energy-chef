import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Download, BookOpen } from "lucide-react"

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Book Cover */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-8 text-white max-w-sm mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Pure Energy Living</h2>
            <p className="text-green-100">The Complete Guide to Raw Vegan Transformation</p>
            <div className="mt-6 text-sm">
              <p>By Steve Factor</p>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div>
          <h1 className="text-4xl font-light text-green-800 mb-4">Pure Energy Living</h1>
          <p className="text-xl text-gray-600 mb-6">
            Transform your health and vitality with the power of raw vegan nutrition
          </p>

          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-600">(127 reviews)</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-24">Format:</span>
              <span className="text-gray-600">Digital PDF</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-24">Pages:</span>
              <span className="text-gray-600">156 pages</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-24">Price:</span>
              <span className="text-2xl font-bold text-green-600">$29.97</span>
            </div>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg mb-4 w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" />
            Get Your Copy Now
          </Button>

          <p className="text-sm text-gray-500">Instant download • 30-day money-back guarantee</p>
        </div>
      </div>

      {/* What's Inside */}
      <section className="mt-16">
        <h2 className="text-3xl font-light text-green-800 text-center mb-12">What's Inside</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-green-800 mb-3">Foundation</h3>
              <p className="text-gray-600">
                Understanding raw vegan principles and the science behind pure energy nutrition
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-green-800 mb-3">Transition</h3>
              <p className="text-gray-600">
                Step-by-step guide to transitioning to a raw vegan lifestyle safely and sustainably
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-green-800 mb-3">Recipes</h3>
              <p className="text-gray-600">50+ delicious raw vegan recipes for every meal and occasion</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

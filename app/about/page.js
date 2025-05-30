import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Leaf, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-light text-green-800 mb-6">Meet Steve Factor</h1>
          <p className="text-xl text-gray-600 mb-6">Holistic Health Coach & Pure Energy Chef</p>
          <p className="text-gray-600 mb-6">
            For over a decade, I've been passionate about helping people discover the transformative power of raw vegan
            nutrition. My journey began with my own health transformation, and now I'm dedicated to sharing this
            life-changing approach with others.
          </p>
          <p className="text-gray-600 mb-8">
            Through my programs, recipes, and coaching, I've helped thousands of people reclaim their energy, improve
            their health, and discover the joy of pure, vibrant living.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">Work With Me</Button>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
            <div className="bg-green-600 rounded-full w-32 h-32 flex items-center justify-center">
              <span className="text-white text-4xl font-light">SF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">5K+</div>
          <div className="text-gray-600">Students Helped</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
          <div className="text-gray-600">Recipes Created</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
          <div className="text-gray-600">Programs Launched</div>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-light text-green-800 text-center mb-12">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-green-800 mb-3">Holistic Wellness</h3>
              <p className="text-gray-600">
                True health encompasses mind, body, and spirit. I believe in addressing the whole person, not just
                symptoms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-green-800 mb-3">Natural Living</h3>
              <p className="text-gray-600">
                Nature provides everything we need for optimal health. Raw, plant-based foods are our body's preferred
                fuel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-green-800 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Transformation happens best in community. I create supportive environments for lasting change.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-green-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                My methods are based on science, experience, and thousands of success stories from my students.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-light text-green-800 mb-4">Ready to Transform Your Health?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of others who have discovered the power of pure energy living. Let's work together to unlock
          your body's natural healing potential.
        </p>
        <div className="space-x-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white">Start with My Book</Button>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Explore Programs
          </Button>
        </div>
      </section>
    </div>
  )
}

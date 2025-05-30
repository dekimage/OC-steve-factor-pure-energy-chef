import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users, Star } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      id: "7-day-detox",
      title: "7-Day Detox Challenge",
      description: "Reset your body and mind with our gentle yet effective detox program",
      duration: "7 days",
      videos: "14 videos",
      participants: "2,340",
      rating: 4.9,
      price: "$47",
      featured: true,
    },
    {
      id: "14-day-smoothies",
      title: "14-Day Green Smoothie Challenge",
      description: "Transform your mornings with nutrient-packed green smoothies",
      duration: "14 days",
      videos: "21 videos",
      participants: "1,890",
      rating: 4.8,
      price: "$67",
      featured: false,
    },
    {
      id: "raw-basics",
      title: "Raw Food Basics Masterclass",
      description: "Master the fundamentals of raw food preparation and nutrition",
      duration: "21 days",
      videos: "35 videos",
      participants: "3,120",
      rating: 4.9,
      price: "$97",
      featured: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-green-800 mb-4">Wellness Programs</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Guided video series to transform your health and energy levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.id} className={`h-full ${program.featured ? "ring-2 ring-green-200" : ""}`}>
            <CardContent className="p-6">
              {program.featured && (
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <div className="bg-green-50 rounded-lg p-6 mb-6 text-center">
                <Play className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-medium text-green-800 mb-2">{program.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{program.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Play className="w-4 h-4 mr-2" />
                  {program.videos}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {program.participants} participants
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 fill-current text-yellow-400" />
                  {program.rating} rating
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">{program.price}</span>
                <span className="text-sm text-gray-500">one-time payment</span>
              </div>

              <Link href={`/programs/${program.id}`}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">All programs include lifetime access and community support</p>
        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
          View All Programs
        </Button>
      </div>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

export default function RecipesPage() {
  const recipes = [
    {
      id: "green-goddess-smoothie",
      title: "Green Goddess Smoothie",
      description: "Energizing blend of spinach, mango, and coconut water",
      prepTime: "5 min",
      servings: "2",
      difficulty: "Easy",
      rating: 4.9,
      category: "Smoothies",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "raw-zucchini-pasta",
      title: "Raw Zucchini Pasta",
      description: "Fresh spiralized zucchini with cashew cream sauce",
      prepTime: "15 min",
      servings: "4",
      difficulty: "Medium",
      rating: 4.8,
      category: "Main Dishes",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "chocolate-avocado-mousse",
      title: "Chocolate Avocado Mousse",
      description: "Rich and creamy dessert made with ripe avocados",
      prepTime: "10 min",
      servings: "4",
      difficulty: "Easy",
      rating: 4.9,
      category: "Desserts",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "rainbow-salad-bowl",
      title: "Rainbow Salad Bowl",
      description: "Colorful mix of fresh vegetables with tahini dressing",
      prepTime: "20 min",
      servings: "2",
      difficulty: "Easy",
      rating: 4.7,
      category: "Salads",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "energy-balls",
      title: "Pure Energy Balls",
      description: "Date and nut energy bites for sustained energy",
      prepTime: "15 min",
      servings: "12",
      difficulty: "Easy",
      rating: 4.8,
      category: "Snacks",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "green-juice-blend",
      title: "Green Juice Blend",
      description: "Nutrient-packed juice with kale, cucumber, and apple",
      prepTime: "10 min",
      servings: "2",
      difficulty: "Easy",
      rating: 4.6,
      category: "Juices",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = ["All", "Smoothies", "Main Dishes", "Salads", "Desserts", "Snacks", "Juices"]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-green-800 mb-4">Raw Vegan Recipes</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Delicious, nutritious recipes that will energize your body and delight your taste buds
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className={
              category === "All"
                ? "bg-green-600 hover:bg-green-700"
                : "border-green-600 text-green-600 hover:bg-green-50"
            }
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-green-600">{recipe.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {recipe.servings} servings
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{recipe.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">More recipes added weekly</p>
        <Link href="/programs" className="text-green-600 hover:text-green-700 font-medium">
          Join our programs for exclusive recipes →
        </Link>
      </div>
    </div>
  )
}

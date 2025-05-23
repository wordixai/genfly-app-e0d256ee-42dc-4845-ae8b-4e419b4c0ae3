import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", description: "Rich and bold single shot" },
      { name: "Cappuccino", price: "$4.25", description: "Espresso with steamed milk foam" },
      { name: "Latte", price: "$4.75", description: "Smooth espresso with steamed milk" },
      { name: "Cold Brew", price: "$4.00", description: "Slow-steeped for 12 hours" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "$3.25", description: "Buttery and flaky French pastry" },
      { name: "Blueberry Muffin", price: "$3.75", description: "Fresh baked with local blueberries" },
      { name: "Chocolate Chip Cookie", price: "$2.50", description: "Warm and gooey homemade cookie" },
      { name: "Avocado Toast", price: "$8.50", description: "Multigrain bread with fresh avocado" }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and fresh pastries made with the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((category) => (
            <Card key={category.category} className="bg-white shadow-lg">
              <CardHeader className="bg-amber-50 border-b">
                <CardTitle className="text-2xl text-amber-700">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="font-bold text-amber-600 text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description: "We source our beans from sustainable farms around the world, ensuring every cup is exceptional."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink and pastry is crafted with care by our passionate team of baristas and bakers."
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "More than just a cafe, we're a gathering place where friendships are made and ideas are born."
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, Brew & Bean started as a dream to create the perfect neighborhood cafe. 
              We believe that great coffee brings people together and creates moments of joy in everyday life.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From our carefully selected single-origin beans to our house-made pastries, 
              everything we serve is crafted with attention to detail and a commitment to quality.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center border-none shadow-none">
                  <CardContent className="p-4">
                    <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
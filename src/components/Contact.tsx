import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Coffee Street", "Downtown District", "City, State 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@brewandbean.com"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 7:00 AM - 9:00 PM"]
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the perfect blend of great coffee and warm hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center bg-white shadow-lg">
              <CardHeader className="pb-4">
                <info.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {info.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your experience or ask us anything..."
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="bg-amber-50 p-8 lg:p-12 flex items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  We'd Love to Hear From You
                </h4>
                <p className="text-gray-600 mb-6">
                  Whether you have questions about our menu, want to book a private event, 
                  or just want to share your feedback, we're here to help.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-amber-600 mr-3" />
                    <span>Quick response guaranteed</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-amber-600 mr-3" />
                    <span>We reply within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
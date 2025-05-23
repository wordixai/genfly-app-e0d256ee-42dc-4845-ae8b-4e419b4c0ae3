import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 text-amber-400 mr-2" />
              <h3 className="text-2xl font-bold text-amber-400">Brew & Bean</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your neighborhood coffee shop where quality meets community. 
              Join us for exceptional coffee and unforgettable moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Coffee Street</p>
              <p>Downtown District</p>
              <p>City, State 12345</p>
              <p className="mt-4">(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Brew & Bean. All rights reserved. Made with ❤️ for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react';
import { ChevronDown, Mountain, Shield, Zap, Star, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Mountain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkiBike Pro</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
                <a href="#specs" className="text-gray-700 hover:text-blue-600 transition-colors">Specifications</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#specs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Specifications</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ride the Mountain
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate downhill adventure with our revolutionary bike ski system. 
            Engineered for thrill-seekers who demand performance, safety, and pure adrenaline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Order Now - $2,499
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkiBike Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered with precision and tested by professionals, our bike ski delivers 
              unmatched performance on any downhill terrain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Aerodynamic design and lightweight carbon fiber construction deliver speeds up to 60 mph 
                while maintaining complete control and stability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced braking system with dual-disc brakes and shock absorption technology 
                ensures maximum safety on steep descents.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All-Terrain Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Adaptive ski technology works on powder, packed snow, and ice. 
                Conquers any mountain condition with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the thrill through the eyes of our riders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Mountain adventure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Alpine Adventure</h3>
                <p className="text-sm">Swiss Alps, 2024</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Winter sports"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Powder Perfect</h3>
                <p className="text-sm">Colorado Rockies</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img 
                src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Extreme sports"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Steep Descent</h3>
                <p className="text-sm">French Alps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with precision engineering and premium materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Frame Material</span>
                <span className="font-semibold">Carbon Fiber</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Weight</span>
                <span className="font-semibold">15.5 lbs (7 kg)</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Max Speed</span>
                <span className="font-semibold">60 mph (97 km/h)</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Brake System</span>
                <span className="font-semibold">Dual Hydraulic Disc</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Ski Length</span>
                <span className="font-semibold">140cm</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Rider Weight Limit</span>
                <span className="font-semibold">250 lbs (113 kg)</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Shock Absorption</span>
                <span className="font-semibold">Advanced Pneumatic</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Temperature Range</span>
                <span className="font-semibold">-20°F to 50°F</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Warranty</span>
                <span className="font-semibold">3 Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-300">Price</span>
                <span className="font-semibold text-blue-400">$2,499</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Riders Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Absolutely incredible! The SkiBike Pro changed my entire winter experience. 
                The speed and control are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Pro Athlete</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Best investment I've made for winter sports. The safety features give me 
                confidence to push my limits."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-500">Adventure Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Revolutionary design! Works perfectly on all types of snow conditions. 
                Highly recommended for serious riders."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Alex Rodriguez</p>
                  <p className="text-sm text-gray-500">Ski Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ride?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to order your SkiBike Pro or learn more about our products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">info@skibikepro.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Denver, Colorado, USA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SkiBike Pro</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 SkiBike Pro. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2">
                Engineered for adventure. Built for performance.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
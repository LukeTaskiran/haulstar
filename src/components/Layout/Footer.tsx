import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-hero rounded-full p-2 w-12 h-12 flex items-center justify-center">
                <span className="text-white font-bold text-lg">⭐</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HAUL STAR</h3>
                <p className="text-sm text-gray-300 font-medium">YOU CALL, WE HAUL</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Ontario's most transparent and reliable moving company. 
              We stay until the job is done, with no time limits.
            </p>
             <div className="space-y-2 text-sm">
               
             </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link to="/estimate" className="text-gray-300 hover:text-white transition-colors">Get Estimate</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Local Moving</li>
              <li className="text-gray-300">Long Distance Moving</li>
              <li className="text-gray-300">Junk Removal</li>
              <li className="text-gray-300">Packing Services</li>
              <li className="text-gray-300">Commercial Moves</li>
              <li className="text-gray-300">Senior Discounts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1-647-956-4818" className="text-gray-300 hover:text-white transition-colors">
                  (647) 956-4818 - 24/7 Agent Riley
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:haulstarr@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  haulstarr@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-gray-300">
                  Serving Greater Toronto Area<br />
                  and all of Ontario
                </span>
              </div>
            </div>
            <Button asChild className="w-full shadow-primary">
              <Link to="/estimate">Get Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Haul Star Moving & Junk Removal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">License: FMCSA #123456</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
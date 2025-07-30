import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Pricing",
    href: "/pricing"
  }, {
    name: "Special Offers",
    href: "/offers"
  }, {
    name: "Reviews",
    href: "/reviews"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/c97d3a45-7f06-448e-82c4-9eb8dccf0c43.png" alt="Haul Star Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-primary">HAUL STAR</h1>
              <p className="text-xs text-muted-foreground font-medium">YOU CALL, WE HAUL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end space-y-1">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+1-647-406-5261" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">(647) 406-5261</span>
                    <span className="text-xs text-muted-foreground">Main Office</span>
                  </div>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+1-416-270-0159" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">(416) 270-0159</span>
                    <span className="text-xs text-muted-foreground">Tarun Mehta</span>
                  </div>
                </a>
              </Button>
            </div>
            <Button asChild className="shadow-primary">
              <Link to="/estimate">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1-647-406-5261" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <div className="flex flex-col items-center">
                      <span className="font-medium">(647) 406-5261</span>
                      <span className="text-xs text-muted-foreground">Main Office</span>
                    </div>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1-416-270-0159" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <div className="flex flex-col items-center">
                      <span className="font-medium">(416) 270-0159</span>
                      <span className="text-xs text-muted-foreground">Tarun Mehta</span>
                    </div>
                  </a>
                </Button>
                <Button asChild className="shadow-primary">
                  <Link to="/estimate" onClick={() => setIsOpen(false)}>
                    Get Free Estimate
                  </Link>
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Clock, 
  Shield, 
  DollarSign, 
  Star, 
  Users, 
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  MapPin,
  GraduationCap,
  Calendar,
  AlertTriangle
} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import professionalMovers from "@/assets/professional-movers.jpg";
import ontarioLandscape from "@/assets/ontario-landscape.jpg";

const Home = () => {
  const services = [
    {
      icon: Truck,
      title: "Local & Long Distance Moving",
      description: "Professional moving services across Ontario with transparent pricing."
    },
    {
      icon: Users,
      title: "Junk Removal",
      description: "Eco-friendly junk removal and disposal services."
    },
    {
      icon: Shield,
      title: "Packing Services",
      description: "Professional packing and unpacking with quality materials."
    },
    {
      icon: Award,
      title: "Furniture Assembly",
      description: "Expert disassembly and reassembly of furniture."
    }
  ];

  const differentiators = [
    "$100 OFF your first move!",
    "Student & Senior Discounts Available", 
    "Refer a Friend & Get $100 OFF your next move",
    "Transparent flat-rate pricing",
    "No time limits — we stay until it's done",
    "Truck rental included in cost",
    "Available 7am to 10pm daily",
    "Fully Licensed & Insured"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "Haul Star made our move stress-free! They arrived on time, were incredibly professional, and stayed until everything was perfect. Highly recommend!"
    },
    {
      name: "Mike Chen",
      location: "Mississauga, ON",
      rating: 5,
      text: "Best moving experience I've ever had. The flat-rate pricing meant no surprises, and the team was amazing. Worth every penny!"
    },
    {
      name: "Emma Wilson",
      location: "Ottawa, ON",
      rating: 5,
      text: "They helped my elderly parents downsize with such care and respect. The senior discount was a nice touch too. Thank you Haul Star!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroTruck} 
            alt="Haul Star Moving Truck" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🚛 Ontario's Most Transparent Movers
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              You Call.<br />
              <span className="text-gradient-primary bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                We Haul.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">
              Professional moving and junk removal across Ontario. 
              No time limits, no hidden fees, just honest service you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-glow bg-white text-primary hover:bg-gray-100">
                <Link to="/estimate" className="flex items-center space-x-2">
                  <span>Get Free Estimate</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
             <Button
                size="lg"
                asChild
                className="border-white text-white"
              >
                <a href="tel:+1-647-406-5261" className="flex items-center space-x-2 text-white">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-white">(647) 406-5261</span>
                </a>
              </Button>
              
              <Button
                size="lg"
                asChild
                className="border-white text-white"
              >
                <a href="tel:+1-416-270-0159" className="flex items-center space-x-2 text-white">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-white">(416) 270-0159</span>
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6 mt-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>All of Ontario</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Offer Banner - FOMO Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-300 animate-pulse" />
              <Badge className="bg-yellow-500 text-black font-bold px-4 py-2 text-lg animate-bounce">
                ⏰ LIMITED TIME - BACK TO SCHOOL SPECIAL
              </Badge>
              <AlertTriangle className="h-6 w-6 text-yellow-300 animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              🎓 Students Save BIG This August!
            </h2>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">$100 OFF</div>
                  <p className="text-lg">Your First Move with Code</p>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-xl mt-2">
                    STUDENT100
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">50% OFF</div>
                  <p className="text-lg">With Haul Share Program</p>
                  <p className="text-sm text-gray-200 mt-2">Share truck with other students</p>
                </div>
              </div>
            </div>

            <div className="bg-red-700/80 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5 text-yellow-300" />
                <p className="text-lg font-semibold">
                  ⚡ HURRY: Only 15 student slots left for August moves!
                </p>
              </div>
              <p className="text-sm mt-2 text-gray-100">
                Back-to-school season is HERE. Book within 48 hours or miss out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-glow bg-yellow-500 text-black hover:bg-yellow-400 text-xl px-8 py-4 font-bold">
                <Link to="/student" className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6" />
                  <span>Claim Student Deal NOW!</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-red-600 text-xl px-8 py-4 font-bold">
                <Link to="/estimate" className="flex items-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 text-sm text-yellow-200">
              <p>✅ 1,500+ students moved this year | ✅ Licensed & Insured | ✅ No hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From local moves to junk removal, we provide comprehensive moving solutions 
              for homeowners, renters, students, and businesses across Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Haul Star?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're not just another moving company. We're Ontario locals who understand 
                what makes a move successful: transparency, reliability, and care.
              </p>
              
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="shadow-primary">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={professionalMovers} 
                alt="Professional Haul Star Movers" 
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">1500+ Happy Customers</p>
                    <p className="text-sm text-muted-foreground">This year alone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. See what Ontarians are saying about Haul Star.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ontarioLandscape} 
            alt="Ontario Landscape" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move? Let's Get Started!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Get your free, transparent quote in minutes. No hidden fees, no surprises — 
            just honest pricing for honest work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-glow bg-white text-primary hover:bg-gray-100">
              <Link to="/estimate" className="flex items-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1-647-406-5261" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now: (647) 406-5261</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
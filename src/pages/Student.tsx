
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
  Calendar,
  UserCheck,
  Percent
} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const Student = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, just flat-rate pricing you can trust."
    },
    {
      icon: Clock,
      title: "No Time Limits",
      description: "We work until everything is perfect."
    },
    {
      icon: Calendar,
      title: "Flexible Moving Times",
      description: "Pick your preferred date and time — slots fill up fast!"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Your belongings are in safe hands."
    }
  ];

  const offers = [
    {
      icon: UserCheck,
      title: "$100 OFF Your First Move!",
      description: "New customers save $100 on their first moving service with HaulStar.",
      badge: "STUDENT100",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Haul Share",
      description: "Share a truck with fellow students moving to nearby areas and cut your price by up to 50%!",
      badge: "Save 50%",
      color: "bg-purple-500"
    }
  ];

  const universities = [
    "University of Toronto",
    "Western University", 
    "York University",
    "Queen's University",
    "McMaster University",
    "University of Waterloo",
    "Carleton University",
    "Ryerson University",
    "University of Ottawa",
    "Brock University"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroTruck} 
            alt="HaulStar Moving Truck" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-500/90 text-white border-red-400 hover:bg-red-600/90 text-lg px-4 py-2">
              🎓 Exclusive Student Offer - Limited Time!
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Back-to-School Move<br />
              <span className="text-gradient-primary bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Made Easy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
              Hey Students! Don't cram everything in the back. We've helped countless students move hassle-free with affordable, fast service at HaulStar. We help all over Ontario!
            </p>
            
            <div className="bg-red-600/90 text-white p-4 rounded-lg mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                ⏰ Hurry — Limited spots available! Book now before slots fill up!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="shadow-glow bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-4">
                <Link to="/estimate" className="flex items-center space-x-2">
                  <span>Pick Your Moving Date & Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                <Link to="/estimate" className="flex items-center space-x-2">
                  <span>Sign Up and Save $100!</span>
                  <UserCheck className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>1,500+ Happy Students This Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Exclusive Student Discounts</h2>
            <p className="text-xl text-muted-foreground">
              Special offers designed just for students moving back to school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300 relative overflow-hidden border-2">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-4 py-2 text-sm font-bold rounded-bl-lg`}>
                  {offer.badge}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                      <offer.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-hero text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">HaulStar Pricing for Students</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h4 className="text-xl font-bold mb-4">Standard Move</h4>
                <div className="text-3xl font-bold mb-2">$299</div>
                <p className="text-gray-200 mb-4">Includes truck rental, 2 movers, and up to 3 hours of service</p>
                <div className="line-through text-gray-300">Regular: $399</div>
                <div className="text-yellow-300 font-bold">With STUDENT100: $199!</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur border-2 border-yellow-400">
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  MOST POPULAR
                </div>
                <h4 className="text-xl font-bold mb-4">Haul Share</h4>
                <div className="text-3xl font-bold mb-2">$149</div>
                <p className="text-gray-200 mb-4">Per person when sharing with fellow students</p>
                <div className="text-yellow-300 font-bold">Save up to 50%!</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-bold text-lg">
                Use Promo Code: STUDENT100 for $100 OFF!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HaulStar */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Students Choose HaulStar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Students From</h2>
            <p className="text-xl text-muted-foreground">
              We're proud to serve students from all across Ontario
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-12">
            <div className="w-32 h-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/2c4f52bc-6751-40c0-afe2-d2ed0b820fca.png" 
                alt="University of Toronto" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="w-32 h-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/11507bdf-7bbf-4030-af56-3c55a1cafe1d.png" 
                alt="Western University Mustangs" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="w-32 h-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4e97b634-32bc-4f49-b115-baf600312a93.png" 
                alt="McMaster University" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="w-32 h-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/75714658-14df-4d94-ba1a-1b62f6110388.png" 
                alt="Laurier Golden Hawks" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="w-32 h-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/7423b7d3-fa48-430a-bc4c-cac5dab4e7f6.png" 
                alt="Carleton University" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm text-muted-foreground">
            {universities.map((university, index) => (
              <div key={index} className="py-2">
                {university}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-primary">
              Wherever you're heading, HaulStar is here to make your move easier and more affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto shadow-card">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Over 500+ Happy Students Moved This Year!
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who chose HaulStar for their back-to-school move
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-primary">
                <Link to="/reviews">Read Student Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Book Your Move Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Limited spots available as back-to-school season approaches. 
            Lock in your exclusive student discount now!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-glow bg-yellow-500 text-black hover:bg-yellow-400">
              <Link to="/estimate" className="flex items-center space-x-2">
                <span>Get Your Free Estimate Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1-647-406-5261" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call (647) 406-5261</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Student;

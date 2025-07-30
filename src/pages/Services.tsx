import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Home, 
  Package, 
  Wrench, 
  Building, 
  Users,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import professionalMovers from "@/assets/professional-movers.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Local & Long Distance Moving",
      description: "Professional moving services across Ontario with transparent flat-rate pricing.",
       features: [
         "Local moves within 100km",
         "Long-distance moves across Ontario",
         "Truck rental included",
         "Professional packing materials",
         "Furniture padding and protection",
         "Furniture disassembly/assembly"
       ],
      startingPrice: "From $349"
    },
    {
      icon: Package,
      title: "Junk Removal",
      description: "Eco-friendly junk removal and disposal services for homes and businesses.",
       features: [
         "Furniture and appliance removal",
         "Construction debris cleanup",
         "Estate cleanouts",
         "Donation and recycling",
         "Same-day service available",
         "Free when purchasing moving service"
       ],
      startingPrice: "Starting at $100"
    },
    {
      icon: Home,
      title: "Packing & Unpacking",
      description: "Professional packing services to ensure your belongings arrive safely.",
       features: [
         "Full-service packing",
         "Partial packing assistance",
         "Quality packing materials",
         "Fragile item specialty packing",
         "Unpacking at destination",
         "Furniture protection pads"
       ],
      startingPrice: "$200 flat"
    },
    {
      icon: Wrench,
      title: "Furniture Assembly",
      description: "Expert disassembly and reassembly of furniture and specialty items.",
       features: [
         "Bed frame disassembly/assembly",
         "Dining table and desk setup",
         "Wardrobe and cabinet assembly",
         "TV mounting and setup",
         "Exercise equipment assembly",
         "Furniture protection pads included"
       ],
      startingPrice: "From $89"
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Specialized moving services for businesses, offices, and commercial spaces.",
       features: [
         "Office relocations",
         "Retail store moves",
         "Warehouse transfers",
         "Equipment and machinery moving",
         "Minimal business downtime",
         "Furniture disassembly/assembly included"
       ],
      startingPrice: "Custom Quote"
    },
    {
      icon: Users,
      title: "Specialty Services",
      description: "Customized moving solutions for unique situations and special requirements.",
       features: [
         "Senior moving assistance",
         "Student dorm moves",
         "Piano and artwork moving",
         "Storage unit transfers",
         "Emergency last-minute moves",
         "Furniture protection pads included"
       ],
      startingPrice: "From $249"
    }
  ];

  const truckSizes = [
    {
      size: "Pickup Truck",
      capacity: "Small loads",
      ideal: "Studio apartments, small items",
      features: ["Perfect for small moves", "Furniture pickup", "Junk removal"]
    },
    {
      size: "Cargo Van",
      capacity: "1-2 rooms",
      ideal: "Apartments, small homes",
      features: ["Weather protection", "Easy loading", "City navigation"]
    },
    {
      size: "10' Truck",
      capacity: "1-2 bedrooms",
      ideal: "Small apartments, condos",
      features: ["Low deck height", "Easy access", "Fuel efficient"]
    },
    {
      size: "14' Truck",
      capacity: "2-3 bedrooms",
      ideal: "Average homes, townhouses",
      features: ["Most popular size", "Good capacity", "Reliable"]
    },
    {
      size: "17' Truck",
      capacity: "3-4 bedrooms",
      ideal: "Large homes, families",
      features: ["Spacious interior", "Multiple rooms", "Full household"]
    },
    {
      size: "26' Truck",
      capacity: "4+ bedrooms",
      ideal: "Large homes, commercial",
      features: ["Maximum capacity", "Commercial grade", "Long distance"]
    }
  ];

  const additionalServices = [
    "Dollies and moving equipment",
    "Furniture padding and wrapping",
    "Straps and tie-downs",
    "Moving blankets",
    "Bubble wrap and packing paper",
    "Boxes and containers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="absolute inset-0">
          <img 
            src={professionalMovers} 
            alt="Professional Moving Services" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚛 Complete Moving Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            From local moves to junk removal, we provide comprehensive solutions 
            for all your moving needs across Ontario.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Moving Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whatever your moving needs, we have the expertise and equipment to handle it. 
              All services include transparent pricing with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300 h-full">
                <CardHeader>
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg flex-1">{service.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">{service.startingPrice}</Badge>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Truck Sizes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Available Truck Sizes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have the right size truck for any move. All trucks come equipped with 
              professional moving equipment and are included in your flat-rate price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {truckSizes.map((truck, index) => (
              <Card key={index} className="text-center hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{truck.size}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{truck.capacity}</span><br />
                    {truck.ideal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {truck.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Equipment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Equipment Included
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every move includes professional-grade equipment to ensure your 
                belongings are protected and the job gets done efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalServices.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">No Time Limits</h3>
                    <p className="text-sm text-muted-foreground">We stay until the job is done</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fully Insured</h3>
                    <p className="text-sm text-muted-foreground">Complete protection for your belongings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trained Professionals</h3>
                    <p className="text-sm text-muted-foreground">Experienced, background-checked movers</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Discounts</h2>
            <p className="text-xl text-muted-foreground">
              We believe quality moving services should be accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Senior Discount</CardTitle>
                <CardDescription>
                  15% off all moving services for seniors 65+
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're honored to help seniors transition to their next chapter with 
                  dignity and care. Valid ID required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Student Discount</CardTitle>
                <CardDescription>
                  10% off for students with valid ID
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Making education more affordable by helping students move without 
                  breaking the bank. College/University ID required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Get your transparent, flat-rate quote today. No hidden fees, 
            no surprises — just honest pricing for quality service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-glow bg-white text-primary hover:bg-gray-100">
              <Link to="/estimate" className="flex items-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
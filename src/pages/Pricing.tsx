import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  X, 
  Star, 
  Shield, 
  Clock,
  Truck,
  DollarSign,
  ArrowRight,
  Calculator
} from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Studio/1BR",
      price: "$349",
      popular: false,
      description: "Perfect for small apartments and studio moves",
      features: [
        "Professional movers included",
        "Moving truck included",
        "Full equipment package",
        "Furniture disassembly/assembly",
        "Furniture protection pads",
        "Local moves (within 100km)"
      ],
      notIncluded: [
        "Packing materials",
        "Long distance moves"
      ]
    },
    {
      title: "2BR Home",
      price: "$649",
      popular: true,
      description: "Most popular choice for average families",
      features: [
        "Professional movers included",
        "Moving truck included",
        "Full equipment package",
        "Furniture disassembly/assembly",
        "Furniture protection pads",
        "Free junk removal"
      ],
      notIncluded: [
        "Packing service",
        "Storage fees"
      ]
    },
    {
      title: "3BR+ Home",
      price: "$899",
      popular: false,
      description: "Comprehensive service for larger homes",
      features: [
        "Professional movers included",
        "Moving truck included",
        "Full equipment package",
        "Furniture disassembly/assembly",
        "Furniture protection pads",
        "Free junk removal",
        "Heavy item specialists"
      ],
      notIncluded: [
        "Specialty items (piano, art)",
        "Long-distance surcharges"
      ]
    }
  ];

  const additionalServices = [
    {
      service: "Packing Service",
      price: "$200 flat",
      description: "Professional packing with quality materials"
    },
    {
      service: "Packing Materials",
      price: "$3-$15 per box",
      description: "Boxes, tape, bubble wrap, paper"
    },
    {
      service: "Junk Removal",
      price: "Starting at $100 or free when purchasing moving service",
      description: "Eco-friendly disposal and donation"
    },
    {
      service: "Long Distance",
      price: "$1.50/km",
      description: "Additional charge for moves over 100km"
    }
  ];

  const comparison = [
    {
      feature: "Transparent Pricing",
      haulStar: true,
      others: false,
      description: "What we quote is what you pay"
    },
    {
      feature: "No Time Limits",
      haulStar: true,
      others: false,
      description: "We stay until the job is done"
    },
    {
      feature: "Truck Included",
      haulStar: true,
      others: false,
      description: "No separate truck rental fees"
    },
    {
      feature: "Equipment Included",
      haulStar: true,
      others: "extra",
      description: "Dollies, straps, padding included"
    },
    {
      feature: "Insurance Coverage",
      haulStar: true,
      others: true,
      description: "Full protection for your belongings"
    },
    {
      feature: "Hidden Fees",
      haulStar: false,
      others: true,
      description: "Stairs, distance, fuel surcharges"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            💰 Transparent Flat-Rate Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            No hidden fees, no surprises, no time limits. What we quote is exactly what you pay. 
            Get your free estimate in under 2 minutes.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flat-Rate Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that fits your home size. All prices include truck, 
              equipment, and professional movers with no time limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-primary transition-all duration-300 ${tier.popular ? 'ring-2 ring-primary shadow-primary' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tier.title}</CardTitle>
                   <div className="mb-4">
                     <span className="text-4xl font-bold text-primary">{tier.price}</span>
                     <span className="text-muted-foreground ml-1">starting at a flat rate</span>
                   </div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-600">✓ Included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-muted-foreground">Additional costs:</h4>
                    <ul className="space-y-2">
                      {tier.notIncluded.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <X className="h-4 w-4 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className={`w-full ${tier.popular ? 'shadow-primary' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    <Link to="/estimate">Get Free Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom quote for a larger home or commercial space?
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/estimate" className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Get Custom Estimate</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Add these services to customize your move. All pricing is transparent and upfront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{service.service}</CardTitle>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Haul Star?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our transparent pricing compares to other moving companies. 
              No hidden fees means real savings for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <div className="text-center">
                <div className="bg-gradient-hero text-white p-4 rounded-lg mb-2">
                  <h3 className="font-bold">Haul Star</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-muted p-4 rounded-lg mb-2">
                  <h3 className="font-bold">Other Companies</h3>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {comparison.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-medium">{item.feature}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-center">
                      {item.haulStar === true ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                      ) : item.haulStar === false ? (
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm">{item.haulStar}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {item.others === true ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                      ) : item.others === false ? (
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm">{item.others}</span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Guarantees</h2>
            <p className="text-xl text-muted-foreground">
              We stand behind our pricing and service with these ironclad guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle>No Hidden Fees</CardTitle>
                <CardDescription>
                  What we quote is what you pay. No surprise charges for stairs, 
                  distance, or fuel.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle>No Time Limits</CardTitle>
                <CardDescription>
                  We stay until your move is complete. No rushing, no additional 
                  hourly charges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                 <CardTitle>Satisfaction Guarantee</CardTitle>
                 <CardDescription>
                   We guarantee your satisfaction with our professional moving service.
                 </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Transparent Pricing?
          </h2>
           <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
             Call for a free quote! Get your exact flat-rate quote from our experts.
           </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-glow bg-white text-primary hover:bg-gray-100">
              <Link to="/estimate" className="flex items-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
             <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
               <a href="tel:+1-647-406-5261">Call (647) 406-5261</a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
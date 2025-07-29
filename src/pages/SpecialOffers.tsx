import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Gift, 
  Users, 
  UserCheck, 
  Percent,
  Star,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";

const SpecialOffers = () => {
  const offers = [
    {
      icon: Gift,
      title: "10% OFF Your First Move!",
      description: "New customers save 10% on their first moving service with Haul Star.",
      badge: "New Customer",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Senior Discount",
      description: "15% off all moving services for seniors 65+. We're honored to help with your transition.",
      badge: "65+ Years",
      color: "bg-blue-500"
    },
    {
      icon: UserCheck,
      title: "Student Discount", 
      description: "10% off for students with valid ID. Making education more affordable.",
      badge: "Student ID Required",
      color: "bg-purple-500"
    },
    {
      icon: Percent,
      title: "Refer a Friend",
      description: "Get $25 OFF your next move when you refer a friend who books with us.",
      badge: "Win-Win",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            💰 Current Promotions & Discounts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Special Offers
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Save money on your next move with our current promotions. 
            Quality service at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Promotions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of these limited-time offers to save on your move. 
              All discounts can be combined with our already competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-3 py-1 text-xs rounded-bl-lg`}>
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
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span>Can be combined with flat-rate pricing</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Claim Your Discount</h2>
            <p className="text-xl text-muted-foreground mb-8">
              It's easy to save with Haul Star. Just mention the offer when you book.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Get Your Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our estimate form or call us directly
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Mention the Offer</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us which discount you qualify for
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Save Money</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy your discounted move with Haul Star
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Important Notes:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Valid ID required for senior and student discounts</li>
                <li>• First-time customer discount applies to new customers only</li>
                <li>• Referral discount applies when referred customer completes their move</li>
                <li>• Discounts cannot be combined with other promotional offers</li>
                <li>• All offers subject to terms and conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save on Your Move?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Don't miss out on these great offers. Get your free quote today 
            and start saving with Haul Star.
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
                <span>Call (647) 406-5261</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOffers;
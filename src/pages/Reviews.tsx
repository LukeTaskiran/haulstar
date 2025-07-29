import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ExternalLink } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      date: "2 weeks ago",
      text: "Haul Star made our move stress-free! They arrived exactly on time, were incredibly professional, and stayed until everything was perfect. The flat-rate pricing meant no surprises. Highly recommend!",
      service: "2BR Home Move"
    },
    {
      name: "Mike Chen",
      location: "Mississauga, ON",
      rating: 5,
      date: "1 month ago",
      text: "Best moving experience I've ever had. The team was amazing, careful with our furniture, and the transparent pricing was refreshing. Worth every penny!",
      service: "3BR Home Move"
    },
    {
      name: "Emma Wilson",
      location: "Ottawa, ON",
      rating: 5,
      date: "3 weeks ago",
      text: "They helped my elderly parents downsize with such care and respect. The senior discount was a nice touch too. Thank you Haul Star!",
      service: "Senior Moving"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            ⭐ 4.9/5 Average Rating
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            See what our customers are saying about their Haul Star experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.location} • {review.date}</CardDescription>
                  <Badge variant="outline">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-primary">
              <Link to="/estimate">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
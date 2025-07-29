import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Star, 
  Truck,
  CheckCircle,
  MapPin
} from "lucide-react";
import professionalMovers from "@/assets/professional-movers.jpg";
import ontarioLandscape from "@/assets/ontario-landscape.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden fees, no surprise charges. What we quote is what you pay."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We treat your belongings like our own, with respect and attention to detail."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We don't just meet expectations, we exceed them on every move."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud Ontarians serving our neighbors with local expertise."
    }
  ];

  const team = [
    {
      name: "Mike Thompson",
      role: "Founder & Lead Mover",
      experience: "8+ years",
      description: "Started Haul Star to bring honesty back to the moving industry."
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      experience: "5+ years",
      description: "Ensures every move runs smoothly from booking to completion."
    },
    {
      name: "David Rodriguez",
      role: "Senior Mover",
      experience: "6+ years",
      description: "Expert in furniture assembly and specialty item handling."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "99%", label: "On-Time Rate" },
    { number: "0", label: "Hidden Fees" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="absolute inset-0">
          <img 
            src={ontarioLandscape} 
            alt="Ontario Landscape" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🏠 Proudly Ontario-Based Since 2019
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Haul Star
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            We're not just another moving company. We're Ontario locals who believe 
            moving should be transparent, reliable, and stress-free for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Haul Star was created to fix everything people hate about moving. No more surprise charges. No more late arrivals. No more careless handling.
                </p>
                <p>
                  Founded by a local Ontario mover who believed there had to be a better way, Haul Star was built on one mission: <strong>make moving honest, stress-free, and actually helpful.</strong>
                </p>
                <p>
                  We brought together a reliable team of trained pros who treat every home like their own. Whether you're a student heading to campus, a family upsizing, or a senior downsizing — we offer <strong>transparent pricing, no time limits, and real care</strong> every step of the way.
                </p>
                <p>
                  Today, Haul Star proudly serves communities across Ontario as the province’s most trusted, no-nonsense moving company.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="shadow-primary">
                  <Link to="/estimate">Get Your Free Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={professionalMovers} 
                alt="Haul Star Team" 
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Moves</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Ontario Trusts Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our numbers speak for themselves. Here's what we've accomplished 
              by putting customers first.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They guide every decision we make 
              and every move we complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the people behind Haul Star. We're not just movers — 
              we're your neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gradient-hero w-20 h-20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Licensed & Insured</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your peace of mind is our priority. We're fully licensed, bonded, 
              and insured to protect you and your belongings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">
                Complete coverage for your belongings and our team
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Licensed Movers</h3>
              <p className="text-muted-foreground">
                Certified and trained professionals you can trust
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-gradient-hero w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ontario Based</h3>
              <p className="text-muted-foreground">
                Local expertise with province-wide coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Haul Star Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Join hundreds of satisfied customers who chose transparency, 
            reliability, and care for their most important move.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-glow bg-white text-primary hover:bg-gray-100">
              <Link to="/estimate">Get Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1-416-555-0123">Call (416) 555-0123</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
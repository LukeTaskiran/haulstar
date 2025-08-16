import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Ready to move? Get in touch for your free estimate or answers to any questions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">(647) 956-4818</p>
                  <p className="text-muted-foreground">24/7 Agent Riley - Available 7 days a week</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Owners: (647) 406-5261 - Jalen | (416) 270-0159 - Tarun
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">haulstarr@gmail.com</p>
                  <p className="text-muted-foreground">We respond within 2 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Service Area</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Greater Toronto Area & All of Ontario</p>
                  <p className="text-muted-foreground">Licensed for province-wide service</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full shadow-primary">
                    <a href="/estimate">Get Free Estimate</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href="tel:+1-416-555-0123">Call Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
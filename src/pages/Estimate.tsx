import EstimateForm from "@/components/EstimateForm";

const Estimate = () => {
  return (
    <div className="min-h-screen bg-muted/50">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Estimate</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your move and we'll provide a transparent, flat-rate quote within 2 hours. 
              No hidden fees, no surprises.
            </p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </div>
  );
};

export default Estimate;
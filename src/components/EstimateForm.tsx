import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Upload, Phone, Home, Truck, Package, Wrench, CheckCircle, Video } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Service type icons
const serviceIcons = {
  "Moving": Home,
  "Junk Removal": Package,
  "Furniture Delivery": Truck,
  "Custom Hauling": Wrench,
};

// Base schema for all services
const baseFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.enum(["Moving", "Junk Removal", "Furniture Delivery", "Custom Hauling"]),
});

// Dynamic schemas for each service type
const movingSchema = baseFormSchema.extend({
  fromAddress: z.string().min(5, "Please enter pickup address"),
  toAddress: z.string().min(5, "Please enter delivery address"),
  homeType: z.string().min(1, "Please select home type"),
  elevatorAccess: z.string(),
  heavyItems: z.boolean().optional(),
  additionalDetails: z.string().optional(),
});

const junkRemovalSchema = baseFormSchema.extend({
  address: z.string().min(5, "Please enter your address"),
  junkTypes: z.array(z.string()).min(1, "Please select at least one junk type"),
  stairsAccess: z.string(),
  additionalDetails: z.string().optional(),
});

const furnitureDeliverySchema = baseFormSchema.extend({
  storeName: z.string().min(2, "Please enter store name"),
  pickupAddress: z.string().min(5, "Please enter pickup address"),
  deliveryAddress: z.string().min(5, "Please enter delivery address"),
  itemType: z.string().min(1, "Please select item type"),
  deliveryDate: z.date().optional(),
  additionalDetails: z.string().optional(),
});

const customHaulingSchema = baseFormSchema.extend({
  address: z.string().min(5, "Please enter your address"),
  description: z.string().min(10, "Please describe what needs to be hauled"),
  additionalDetails: z.string().optional(),
});

type ServiceType = "Moving" | "Junk Removal" | "Furniture Delivery" | "Custom Hauling";
type FormValues = z.infer<typeof movingSchema & typeof junkRemovalSchema & typeof furnitureDeliverySchema & typeof customHaulingSchema>;

const EstimateForm = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  // Create a form that can handle any field
  const form = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: selectedService || "",
    },
    mode: "onChange",
  });

  // Reset form when service type changes
  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    form.reset({
      name: form.getValues("name"),
      email: form.getValues("email"),
      phone: form.getValues("phone"),
      serviceType: service,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 5MB`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });
    
    setImageFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index: number) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const urls: string[] = [];
    
    for (const file of files) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('lead-images')
          .upload(filePath, file);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          continue;
        }

        const { data } = supabase.storage
          .from('lead-images')
          .getPublicUrl(filePath);

        urls.push(data.publicUrl);
      } catch (error) {
        console.error('Image upload error:', error);
      }
    }
    
    return urls;
  };

  const onSubmit = async (values: any) => {
    setIsSubmitting(true);

    try {
      let imageUrls: string[] = [];
      
      // Upload images if provided
      if (imageFiles.length > 0) {
        imageUrls = await uploadImages(imageFiles);
      }

      // Prepare form data for JSON storage
      const { serviceType, name, email, phone, ...serviceSpecificData } = values;
      
      // Clean up arrays to ensure they're properly formatted
      const cleanedData = { ...serviceSpecificData };
      
      // Handle junkTypes array properly
      if (cleanedData.junkTypes && Array.isArray(cleanedData.junkTypes)) {
        cleanedData.junkTypes = cleanedData.junkTypes.filter(item => item && item.trim() !== '');
      }
      
      // Add image URLs only if there are any
      if (imageUrls.length > 0) {
        cleanedData.imageUrls = imageUrls;
      }

      // Submit to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name,
            email,
            phone,
            service_type: serviceType,
            form_data: cleanedData,
          }
        ]);

      if (error) {
        throw error;
      }

      setShowSuccess(true);
      form.reset();
      setImageFiles([]);
      setSelectedService(null);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <Card className="max-w-2xl mx-auto shadow-card">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Request Submitted Successfully!</h3>
              <p className="text-muted-foreground mb-4">
                We'll get back to you within 2 hours with your free quote.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold">What's Next?</h4>
              <ul className="text-sm space-y-2 text-left">
                <li>• Our team will review your request</li>
                <li>• We'll contact you within 2 hours</li>
                <li>• Get your transparent, flat-rate quote</li>
                <li>• Schedule your service at your convenience</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => setShowSuccess(false)}
                variant="outline"
                className="flex-1"
              >
                Submit Another Request
              </Button>
              <Button className="flex-1">
                <Video className="w-4 h-4 mr-2" />
                Book Video Consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Call to Action */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6 text-center">
          <Phone className="h-8 w-8 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">Need a Quote Faster?</h3>
          <p className="mb-4">Call for a free estimate!</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <a href="tel:647-406-5261" className="font-semibold hover:underline">
              (647) 406-5261 - Jalen
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:416-270-0159" className="font-semibold hover:underline">
              (416) 270-0159 - Tarun
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Get Your Free Estimate</CardTitle>
          <CardDescription className="text-center">
            Select your service type and fill out the form below for a transparent, flat-rate quote within 2 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Service Type Selection */}
          {!selectedService && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center mb-6">What service do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.keys(serviceIcons) as ServiceType[]).map((service) => {
                  const Icon = serviceIcons[service];
                  return (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all text-center space-y-3"
                    >
                      <Icon className="h-12 w-12 mx-auto text-primary" />
                      <div>
                        <h4 className="font-semibold text-lg">{service === "Junk Removal" ? "🗑️" : service === "Moving" ? "🏠" : service === "Furniture Delivery" ? "🚚" : "🛠️"} {service}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service === "Moving" && "Local & long-distance moving services"}
                          {service === "Junk Removal" && "Furniture & household junk removal"}
                          {service === "Furniture Delivery" && "Store pickup & delivery services"}
                          {service === "Custom Hauling" && "Specialized hauling & transport"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dynamic Form */}
          {selectedService && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Service Type Header */}
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = serviceIcons[selectedService];
                      return <Icon className="h-6 w-6 text-primary" />;
                    })()}
                    <span className="font-semibold">{selectedService} Service</span>
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedService(null)}
                  >
                    Change Service
                  </Button>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(416) 555-0123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service-Specific Fields */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Service Details</h4>
                  
                  {/* Moving Service Fields */}
                  {selectedService === "Moving" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fromAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>From Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St, Toronto, ON" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="toAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>To Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="456 Oak Ave, Toronto, ON" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="homeType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type of Home *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select home type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="studio">Studio</SelectItem>
                                  <SelectItem value="1bed">1 Bedroom</SelectItem>
                                  <SelectItem value="2bed">2 Bedroom</SelectItem>
                                  <SelectItem value="3bed">3 Bedroom</SelectItem>
                                  <SelectItem value="4bed">4+ Bedroom</SelectItem>
                                  <SelectItem value="house">House</SelectItem>
                                  <SelectItem value="condo">Condo</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="elevatorAccess"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Elevator Access *</FormLabel>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="yes" id="elevator-yes" />
                                    <label htmlFor="elevator-yes">Yes</label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id="elevator-no" />
                                    <label htmlFor="elevator-no">No</label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="heavyItems"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Heavy Items (piano, safe, appliances)
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Junk Removal Service Fields */}
                  {selectedService === "Junk Removal" && (
                    <>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Toronto, ON" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="junkTypes"
                        render={() => (
                          <FormItem>
                            <FormLabel>Type of Junk *</FormLabel>
                            <div className="grid grid-cols-2 gap-2">
                              {["Furniture", "Appliances", "Electronics", "Mattresses", "Construction Debris", "Yard Waste", "General Household", "Office Items"].map((item) => (
                                <FormField
                                  key={item}
                                  control={form.control}
                                  name="junkTypes"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...(field.value || []), item])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== item
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="stairsAccess"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stairs Access? *</FormLabel>
                            <FormControl>
                              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="yes" id="stairs-yes" />
                                  <label htmlFor="stairs-yes">Yes</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="stairs-no" />
                                  <label htmlFor="stairs-no">No</label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Furniture Delivery Service Fields */}
                  {selectedService === "Furniture Delivery" && (
                    <>
                      <FormField
                        control={form.control}
                        name="storeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Store Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="IKEA, Best Buy, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pickupAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pickup Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="Store address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="deliveryAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Delivery Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="itemType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Item Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select item type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="furniture">Furniture</SelectItem>
                                  <SelectItem value="appliances">Appliances</SelectItem>
                                  <SelectItem value="electronics">Electronics</SelectItem>
                                  <SelectItem value="mattress">Mattress/Bedding</SelectItem>
                                  <SelectItem value="multiple">Multiple Items</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="deliveryDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Preferred Delivery Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                    className="pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

                  {/* Custom Hauling Service Fields */}
                  {selectedService === "Custom Hauling" && (
                    <>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Toronto, ON" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description of Haul *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe what needs to be hauled, dimensions, weight, special requirements..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Additional Details for all services */}
                  <FormField
                    control={form.control}
                    name="additionalDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special requirements, instructions, or additional information..."
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Photos (Optional)</h4>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload photos for a more accurate quote (max 5 images)
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('image-upload')?.click()}
                    >
                      Choose Files
                    </Button>
                    
                    {imageFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Selected Files:</p>
                        {imageFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-muted rounded p-2 text-sm">
                            <span>{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeImage(index)}
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to receive communications from HaulStarr. 
                  We respect your privacy and never share your information.
                </p>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EstimateForm;
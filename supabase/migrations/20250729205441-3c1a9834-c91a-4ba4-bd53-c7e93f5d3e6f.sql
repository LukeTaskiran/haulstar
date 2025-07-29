-- Create leads table for Haul Star estimates and inquiries
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  room_count TEXT,
  move_type TEXT,
  service_type TEXT NOT NULL,
  additional_details TEXT,
  preferred_date DATE,
  image_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (you can modify this later for admin users)
CREATE POLICY "Admins can view all leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for lead images
INSERT INTO storage.buckets (id, name, public) VALUES ('lead-images', 'lead-images', true);

-- Create storage policies for lead images
CREATE POLICY "Anyone can upload lead images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'lead-images');

CREATE POLICY "Anyone can view lead images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'lead-images');
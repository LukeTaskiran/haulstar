-- Add form_data JSON field to store service-specific data
ALTER TABLE public.leads 
ADD COLUMN form_data JSONB;
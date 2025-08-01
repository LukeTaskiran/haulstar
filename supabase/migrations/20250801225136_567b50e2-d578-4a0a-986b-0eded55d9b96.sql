-- Fix the form_data column type issue
-- Drop and recreate the column with proper JSONB type
ALTER TABLE public.leads 
DROP COLUMN IF EXISTS form_data;

-- Add the column back with proper JSONB type
ALTER TABLE public.leads 
ADD COLUMN form_data JSONB;
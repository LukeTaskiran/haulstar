-- Fix the Discord notification function to handle JSONB properly
CREATE OR REPLACE FUNCTION public.notify_discord()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
declare
  message text;
  image_urls text[];
  embeds json[];
  img_url text;
  base_embed json;
  form_data_json jsonb;
begin
  -- Get form_data and handle it safely
  form_data_json := COALESCE(NEW.form_data, '{}'::jsonb);
  
  -- Extract image URLs from form_data if available, otherwise use image_url field
  if form_data_json ? 'imageUrls' then
    -- Convert JSONB array to text array
    SELECT array_agg(value::text)
    INTO image_urls
    FROM jsonb_array_elements_text(form_data_json->'imageUrls');
  elsif NEW.image_url is not null then
    image_urls := string_to_array(NEW.image_url, ',');
  else
    image_urls := ARRAY[]::text[];
  end if;

  -- Main message content
  message := format(
    '📦 **New Moving Inquiry!**\n\n' ||
    '**Name**: %s\n' ||
    '**Email**: %s\n' ||
    '**Phone**: %s\n' ||
    '**Service Type**: %s\n' ||
    '**Form Data**: %s',
    NEW.name,
    NEW.email,
    coalesce(NEW.phone, 'N/A'),
    NEW.service_type,
    form_data_json::text
  );

  -- Prepare embeds for each image
  if image_urls is not null then
    foreach img_url in array image_urls loop
      img_url := trim(both ' "' from img_url); -- Clean spaces and quotes
      if img_url <> '' then
        base_embed := json_build_object('image', json_build_object('url', img_url));
        embeds := array_append(embeds, base_embed);
      end if;
    end loop;
  end if;

  -- Send the message with optional embeds (images)
  perform http_post(
    'https://discordapp.com/api/webhooks/1400234147850485840/iLj8a6N0wOnTnM3cTbE_YF-hx1BpqjCToRSL_k2fbZwErMsev1NobXcgXesmPA07M3HJ',
    json_build_object(
      'content', message,
      'embeds', coalesce(embeds, '[]'::json[])
    )::text,
    'application/json'
  );

  return new;
end;
$function$;

-- Recreate the trigger
DROP TRIGGER IF EXISTS on_lead_insert ON leads;
CREATE TRIGGER on_lead_insert
  AFTER INSERT ON leads
  FOR EACH ROW EXECUTE FUNCTION notify_discord();
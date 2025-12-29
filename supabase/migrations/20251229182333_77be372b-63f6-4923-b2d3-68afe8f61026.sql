-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Anyone can view published posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Authenticated users can view all posts (for admin)
CREATE POLICY "Authenticated users can view all posts" 
ON public.blog_posts 
FOR SELECT 
TO authenticated
USING (true);

-- Authenticated users can create posts
CREATE POLICY "Authenticated users can create posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = author_id);

-- Authenticated users can update their own posts
CREATE POLICY "Authenticated users can update posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (auth.uid() = author_id);

-- Authenticated users can delete their own posts
CREATE POLICY "Authenticated users can delete posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (auth.uid() = author_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
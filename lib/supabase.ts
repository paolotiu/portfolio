import { createClient, PostgrestResponse } from '@supabase/supabase-js';
import { Blog } from '@/types/interfaces';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getBlogViews = (slug: string): Promise<PostgrestResponse<Blog>> =>
  supabase.from<Blog>('blog').select('views').eq('slug', slug) as unknown as Promise<
    PostgrestResponse<Blog>
  >;

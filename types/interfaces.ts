export interface Blog {
  id: string;
  views?: number;
  slug: string;
}

export interface FrontMatter {
  slug: string;
  publishedAt: string;
  tags: string[];
  summary: string;
  title: string;
}

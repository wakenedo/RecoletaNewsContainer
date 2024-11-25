export interface ContentProps {
  id: string;
  type: string;
  tag: TagProps;
  image: string;
  images: ImageProps[];
  isMultiImage: boolean;
  isMultitag: boolean;
  tags: TagProps[];
  author: string;
  postedAt: DateProps;
  title: string;
  exertContent: string;
  content: string[];
  dinamicContent: DinamicContentProps[];
  quotations: QuotationsProps;
}

export interface TagProps {
  name: string;
}

export interface ImageProps {
  src: string;
}

export interface DateProps {
  day: string;
  month: string;
  year: string;
  time: string;
}
export interface QuotationsProps {
  quoted: QuotedProps;
  quoteText: string;
}

export interface QuotedProps {
  name: string;
  position: string;
  company: string;
}

export interface DinamicContentProps {
  links: ContentLinksProps;
  content: string[];
}

export interface ContentLinksProps {
  src: string;
}

export interface ArticleListProps {
  articles: ContentProps[];
}

export interface NewsListProps {
  news: ContentProps[];
}

export interface RelatedContentProps {
  relatedContent: ContentProps[];
}

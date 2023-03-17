export type SocialItem = {
  key: string;
  icon: string;
  url: string;
  alt: string;
};

export type Social = SocialItem[];

export type HeaderItem = {
  name: string;
  url: string;
  key: string;
};

export type Header = HeaderItem[];

export type Product = {
  title: string;
  description: string;
  image: string;
  key: string;
};

export type Products = Product[];

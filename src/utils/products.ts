export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Hoodies' | 'Zip-up Hoodies' | 'T-Shirts' | 'Sweatpants' | 'Accessories';
  image: string;
  description: string;
  details: string;
  colors: string[];
  sizes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oversized Heavyweight Hoodie',
    price: 750,
    category: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    description: 'A premium heavyweight hoodie designed for a modern silhouette. Crafted from 500GSM organic cotton for ultimate warmth and structure.',
    details: '100% Organic Cotton, 500GSM, Dropped Shoulders, Ribbed Cuffs',
    colors: ['Black', 'Charcoal', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Minimal Oversized Graphic T-Shirt',
    price: 280,
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163471-553014919758?q=80&w=800',
    description: 'A subtle yet bold graphic tee. Features a minimalist HIDDEN IDENTITY print on the chest and back.',
    details: '100% Premium Cotton, 240GSM, Boxy Fit, Reinforced Collar',
    colors: ['Black', 'Off-White'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Premium Oversized Blank T-Shirt',
    price: 220,
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f7a9c903?q=80&w=800',
    description: 'The perfect base layer. An oversized blank tee with a focus on fabric quality and timeless fit.',
    details: '100% Premium Cotton, 220GSM, Relaxed Fit',
    colors: ['Black', 'Off-White', 'Charcoal', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    name: 'Relaxed-Fit Heavyweight Sweatpants',
    price: 420,
    category: 'Sweatpants',
    image: 'https://images.unsplash.com/photo-1552948902-57770973667a?q=80&w=800',
    description: 'Premium comfort meets underground style. Heavyweight fleece sweatpants with a relaxed taper.',
    details: '80% Cotton, 20% Polyester, 400GSM, Elasticated Waist, Tapered Leg',
    colors: ['Black', 'Charcoal', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Signature Zip-up Hoodie',
    price: 850,
    category: 'Zip-up Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    description: 'An elevated take on the zip-up. Features a premium silver-tone zipper and a structured oversized fit.',
    details: '100% Organic Cotton, 500GSM, Dual Side Pockets, Heavy-duty Zipper',
    colors: ['Black', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Hidden Identity Beanie',
    price: 120,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1576871337622-98d76f0a6f5b?q=80&w=800',
    description: 'A minimalist ribbed beanie for any season. Subtle branding on the fold.',
    details: '100% Acrylic, Soft-touch Ribbed Knit',
    colors: ['Black', 'Charcoal'],
    sizes: ['One Size'],
  },
];

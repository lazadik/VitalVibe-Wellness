
export enum Category {
  ENERGY = 'Energy',
  IMMUNITY = 'Immunity',
  RECOVERY = 'Recovery',
  SLEEP = 'Sleep',
  FOCUS = 'Focus'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  rating: number;
  reviews: number;
  count: string;
  tag?: string;
  bgColor?: string;
  hueRotate?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

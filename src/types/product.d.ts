// src/types/product.d.ts

export interface ProductPropTypes {
  title: string;
  description: string;
  category: string[];
  colors: Color[];
  comments: Comment[];
  images: ProductImage[];
  measurements: string;
  originalPrice: number;
  price: number;
  sku: string;
  status: string;
}

export interface Color {
  name: string;
  color: string; // Hex code
}

export interface Comment {
  user: string;
  profileImg: string; // URL to the user's profile image
  comment: string; // User's comment text
  rating: number; // Rating out of 5
}

export interface ProductImage {
  color: string; // The color of the product (e.g., 'White', 'Black')
  quantity: number; // Quantity of the product available for this color
  images: string[]; // Array of images for the product in this color
}

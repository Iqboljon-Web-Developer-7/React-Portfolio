export interface ProductPropTypes {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: {
    value: number;
    percentage: number;
  };
  status: string;
  category: {
    primary: string;
    secondary: string;
  };
  sku: string;
  stock: {
    [color: string]: number; // Dynamic keys for color and stock quantity
  };
  images: {
    color: string;
    images: string[];
  }[];
  reviews: {
    totalReviews: number;
    comments: {
      user: string;
      profileImg: string;
      comment: string;
      rating: number;
    }[];
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    slug: string;
  };
  timestamps: {
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
  };
  additional_infos: {
    measurements: {
      width: number;
      depth: number;
      unit: string;
    };
    weight: {
      value: number;
      unit: string;
    };
  };
}

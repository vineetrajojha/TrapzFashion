export interface Product {
  id: number;
  name: string;
  brandLogo: string;
  images: string[];
  price: string;
  availability: string;
  category: string;
  collection?: string;
  description: string;
  sizes: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  keyHighlights?: {
    design?: string;
    fit?: string;
    neck?: string;
    occasion?: string;
    sleeveStyle?: string;
    washCare?: string;
  };
  fullDescription?: string;
  manufactureAndCare?: string;
  returnPolicy?: string;
  deliveryInfo?: {
    standardDelivery: string;
    expressDelivery: string;
    pincodeDelivery: boolean;
  };
  youMayAlsoLike?: number[];
} 
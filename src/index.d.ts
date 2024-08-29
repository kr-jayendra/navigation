export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
}

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: {productDetail: Product};
};

export type HomeStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

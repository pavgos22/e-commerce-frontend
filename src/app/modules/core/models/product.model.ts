import { Category } from './categories.model';

export interface Product {
  uid: string;
  shortId: number;
  active: boolean;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

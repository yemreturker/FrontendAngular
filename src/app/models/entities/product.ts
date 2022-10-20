export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  unitsInStock: number;
  unitPrice: number;
  isDeleted: boolean;
}
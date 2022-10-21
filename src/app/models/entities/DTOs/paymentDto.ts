export interface PaymentDto {
  id: number;
  orderFicheId: number;
  customer: string;
  product: string;
  amount: number;
  total: number;
}

export interface ICart {
  idcart: string;
  idcliente: string;
  idpayment: string;
  iddeliveryaddress: string;
  idbillingaddress: string;
  produtos: string[];
  total: number;
  subtotal: number;
  discount: number;
  delivery: number;
}
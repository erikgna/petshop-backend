import { IAddress } from "./address";

export interface ICart {
  idcart: string;
  idcliente: string;
  idpayment: string;
  iddeliveryaddress: string;
  idbillingaddress: string;
  produtos: [];
  total: number;
  subtotal: number;
  discount: number;
  delivery: number;
}

export interface ICartUser extends ICart {
  address_addressTocart_idbillingaddress: IAddress;
  address_addressTocart_iddeliveryaddress: IAddress;
}

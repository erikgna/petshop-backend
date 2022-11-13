export interface ISimpleProduto {
  idproduto: string;
  idcategoriaproduto: string;
  nome: string;
  foto: string;
  descricao: string;
  valor: number;
  quantidade: number;
  datareposicao: Date;
}

export interface IProduto extends ISimpleProduto {
  options: { nome: string; value: { name: string; subtotal: number }[] }[];
}

export interface ICartProduto extends ISimpleProduto {
  options?: { nome: string; value: string }[];
  quantity: number;
}

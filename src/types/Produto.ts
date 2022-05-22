type ImagemProdutoProps = {
  id: number;
  produtoId: number;
  imagem: string;
};

export type ProdutosProps = {
  id: number;
  nomeProduto: string;
  preco: number;
  desconto: number;
  imageProduto: ImagemProdutoProps[];
  altura: number;
  ativo: boolean;
  comprimento: number;
  descricao: string;
  estoque: number;
  informacaoNutricional: string;
  largura: number;
  marcaProdutoId: number;
  mediaAvaliacao: number;
  peso: number;
  precoDescontado: number;
  tipoProdutoId: number;
};

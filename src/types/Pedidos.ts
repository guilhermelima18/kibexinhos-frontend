export type PedidosProps = {
  id: number;
  clienteId: number;
  cliente?: string;
  criadoEm: string;
  frete: number;
  tipoPagamentoId: number;
  cep: string;
  estado: string;
  bairro: string;
  endereco: string;
  status: string;
  total: number;
};

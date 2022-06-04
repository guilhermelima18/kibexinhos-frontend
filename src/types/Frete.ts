export type CotacaoFreteProps = {
  id: number;
  name: string;
  price?: string;
  discount?: string;
  delivery_time?: number;
  error?: string;
  company: {
    name: string;
    picture: string;
  };
};

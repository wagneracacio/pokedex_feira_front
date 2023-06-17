import { BaseF } from "./base";

export interface EventoF extends BaseF {
  name: string;
  descricao: string;
  tipo: any;
  pontos: number;
  image: string;
}

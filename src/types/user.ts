import { BaseF } from "./base";

export interface UsuarioF extends BaseF {
  displayName: string;
  descricao: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  pontos: number;
  eventos: string[];
  friends: string[];
}

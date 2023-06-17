import { BaseF } from "./base";
import { EventoF } from "./evento";

export interface UsuarioF extends BaseF {
  displayName: string;
  descricao: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  eventos: EventoF[];
  friends: UsuarioF[];
}

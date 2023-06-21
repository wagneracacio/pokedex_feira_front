import agricola from "../../../assets/images/gallery/agricola.png";
import agronomia from "../../../assets/images/gallery/agronomia.png";
import arquiteto from "../../../assets/images/gallery/arquiteto.png";
import artes from "../../../assets/images/gallery/artes.png";
import beleza from "../../../assets/images/gallery/beleza.png";
import biologia from "../../../assets/images/gallery/biologia.png";
import biomedicina from "../../../assets/images/gallery/biomedicina.png";
import cabeleireiro from "../../../assets/images/gallery/cabeleireiro.png";
import camera from "../../../assets/images/gallery/camera.png";
import carreira from "../../../assets/images/gallery/carreira.png";
import construcao from "../../../assets/images/gallery/construcao.png";
import dancando from "../../../assets/images/gallery/dancando.png";
import moda from "../../../assets/images/gallery/design-de-moda.png";
import doutor from "../../../assets/images/gallery/doutor.png";
import economia from "../../../assets/images/gallery/economia.png";
import empreendedor from "../../../assets/images/gallery/empreendedor.png";
import enfermagem from "../../../assets/images/gallery/enfermagem.png";
import engenharia from "../../../assets/images/gallery/engenharia.png";
import escola from "../../../assets/images/gallery/escola.png";
import fisica from "../../../assets/images/gallery/fisica.png";
import historia from "../../../assets/images/gallery/historia.png";
import justica from "../../../assets/images/gallery/justica.png";
import notas from "../../../assets/images/gallery/notas.png";
import nutricao from "../../../assets/images/gallery/nutricao.png";
import odontologia from "../../../assets/images/gallery/odontologia.png";
import psicologo from "../../../assets/images/gallery/psicologo.png";
import publicitario from "../../../assets/images/gallery/publicitario.png";
import teatro from "../../../assets/images/gallery/teatro.png";
import ti from "../../../assets/images/gallery/ti.png";
import turismo from "../../../assets/images/gallery/turismo.png";
import veterinario from "../../../assets/images/gallery/veterinario.png";
import calculadora from "../../../assets/images/gallery/calculadora.png";
import { EventoF } from "../../../types";
import { uuid } from "uuidv4";
export const imagens = {
  agricola: agricola,
  agronomia: agronomia,
  arquiteto: arquiteto,
  artes: artes,
  beleza: beleza,
  biologia: biologia,
  biomedicina: biomedicina,
  cabeleireiro: cabeleireiro,
  camera: camera,
  carreira: carreira,
  construcao: construcao,
  dancando: dancando,
  moda: moda,
  doutor: doutor,
  economia: economia,
  empreendedor: empreendedor,
  enfermagem: enfermagem,
  engenharia: engenharia,
  escola: escola,
  fisica: fisica,
  historia: historia,
  justica: justica,
  notas: notas,
  nutricao: nutricao,
  odontologia: odontologia,
  psicologo: psicologo,
  publicitario: publicitario,
  teatro: teatro,
  ti: ti,
  turismo: turismo,
  veterinario: veterinario,
  calculadora: calculadora,
};
const profissoes: EventoF[] = [
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "calculadora",
    uid: uuid(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "veterinario",
    uid: uuid(),
    name: "Medicina Veterinária",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "publicitario",
    uid: uuid(),
    name: "Publicidade, Pro, Mark",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "agronomia",
    uid: uuid(),
    name: "Agronomia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "psicologo",
    uid: uuid(),
    name: "Psicologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "justica",
    uid: uuid(),
    name: "Direito",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "ti",
    uid: uuid(),
    name: "Computação",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "doutor",
    uid: uuid(),
    name: "Medicina",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "fisica",
    uid: uuid(),
    name: "Educação Física",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "empreendedor",
    uid: uuid(),
    name: "Empreendedorismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "arquiteto",
    uid: uuid(),
    name: "Arquitetura",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "biomedicina",
    uid: uuid(),
    name: "Biomedicina",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "notas",
    uid: uuid(),
    name: "Música",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "nutricao",
    uid: uuid(),
    name: "Nutrição",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "construcao",
    uid: uuid(),
    name: "Engenharia Civil",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "moda",
    uid: uuid(),
    name: "Moda",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "engenharia",
    uid: uuid(),
    name: "Engenharia mecânica",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "biologia",
    uid: uuid(),
    name: "Biologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "economia",
    uid: uuid(),
    name: "Economia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "artes",
    uid: uuid(),
    name: "Artes Visuais",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "cabeleireiro",
    uid: uuid(),
    name: "Cabelereiro",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "enfermagem",
    uid: uuid(),
    name: "Enfermagem",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "camera",
    uid: uuid(),
    name: "Fotografia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "beleza",
    uid: uuid(),
    name: "Estética",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "historia",
    uid: uuid(),
    name: "História",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "agricola",
    uid: uuid(),
    name: "Engenharia Agrícola",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "odontologia",
    uid: uuid(),
    name: "Odontologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "turismo",
    uid: uuid(),
    name: "Turismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "dancando",
    uid: uuid(),
    name: "dança",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    descricao: "descrição",
    tipo: "prof",
    image: "teatro",
    uid: uuid(),
    name: "Artes Cenicas",
  },
];
const palestras: EventoF[] = [
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "publicitario",
    uid: uuid(),
    name: "Publicidade, Pro, Mark",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "psicologo",
    uid: uuid(),
    name: "Psicologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "turismo",
    uid: uuid(),
    name: "Turismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "calculadora",
    uid: uuid(),
    name: "Organização Financeira",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "escola",
    uid: uuid(),
    name: "Orientação Profissional",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "calculadora",
    uid: uuid(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "escola",
    uid: uuid(),
    name: "Fisica teorica",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "carreira",
    uid: uuid(),
    name: "Transição de Carreira",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "calculadora",
    uid: uuid(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "empreendedor",
    uid: uuid(),
    name: "Empreendedorismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    descricao: "descrição",
    tipo: "pales",
    image: "veterinario",
    uid: uuid(),
    name: "Medicina Veterinária",
  },
];

export const eventos = [...profissoes, ...palestras];

export const getImage = (key: string) => {
  return imagens[key as keyof typeof imagens];
};

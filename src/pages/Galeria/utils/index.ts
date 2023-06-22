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
import { v4 } from "uuid";
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
    Descrição: "descrição",
    Tipo: "prof",
    Image: "calculadora",
    uid: v4(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "veterinario",
    uid: v4(),
    name: "Medicina Veterinária",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "publicitario",
    uid: v4(),
    name: "Publicidade, Pro, Mark",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "agronomia",
    uid: v4(),
    name: "Agronomia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "psicologo",
    uid: v4(),
    name: "Psicologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "justica",
    uid: v4(),
    name: "Direito",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "ti",
    uid: v4(),
    name: "Computação",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "doutor",
    uid: v4(),
    name: "Medicina",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "fisica",
    uid: v4(),
    name: "Educação Física",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "empreendedor",
    uid: v4(),
    name: "Empreendedorismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "arquiteto",
    uid: v4(),
    name: "Arquitetura",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "biomedicina",
    uid: v4(),
    name: "Biomedicina",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "notas",
    uid: v4(),
    name: "Música",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "nutricao",
    uid: v4(),
    name: "Nutrição",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "construcao",
    uid: v4(),
    name: "Engenharia Civil",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "moda",
    uid: v4(),
    name: "Moda",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "engenharia",
    uid: v4(),
    name: "Engenharia mecânica",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "biologia",
    uid: v4(),
    name: "Biologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "economia",
    uid: v4(),
    name: "Economia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "artes",
    uid: v4(),
    name: "Artes Visuais",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "cabeleireiro",
    uid: v4(),
    name: "Cabelereiro",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "enfermagem",
    uid: v4(),
    name: "Enfermagem",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "camera",
    uid: v4(),
    name: "Fotografia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "beleza",
    uid: v4(),
    name: "Estética",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "historia",
    uid: v4(),
    name: "História",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "agricola",
    uid: v4(),
    name: "Engenharia Agrícola",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "odontologia",
    uid: v4(),
    name: "Odontologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "turismo",
    uid: v4(),
    name: "Turismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "dancando",
    uid: v4(),
    name: "dança",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 500,
    Descrição: "descrição",
    Tipo: "prof",
    Image: "teatro",
    uid: v4(),
    name: "Artes Cenicas",
  },
];
const palestras: EventoF[] = [
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "publicitario",
    uid: v4(),
    name: "Publicidade, Pro, Mark",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "psicologo",
    uid: v4(),
    name: "Psicologia",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "turismo",
    uid: v4(),
    name: "Turismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "calculadora",
    uid: v4(),
    name: "Organização Financeira",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "escola",
    uid: v4(),
    name: "Orientação Profissional",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "calculadora",
    uid: v4(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "escola",
    uid: v4(),
    name: "Fisica teorica",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "carreira",
    uid: v4(),
    name: "Transição de Carreira",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "calculadora",
    uid: v4(),
    name: "Administração",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "empreendedor",
    uid: v4(),
    name: "Empreendedorismo",
  },
  {
    pontos: Math.floor(Math.random() * 150) + 700,
    Descrição: "descrição",
    Tipo: "pales",
    Image: "veterinario",
    uid: v4(),
    name: "Medicina Veterinária",
  },
];

export const eventos = [...profissoes, ...palestras];

export const getImage = (key: string) => {
  return imagens[key as keyof typeof imagens];
};

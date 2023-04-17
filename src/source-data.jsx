import { Box, Typography } from "@mui/material";
import Unplash from "./assets/unsplash.jpg";
import Unplash2 from "./assets/unsplash2.jpg";
import Category from "./assets/category.svg";
import Product from "./assets/product.svg";
import ImagePost1 from "./assets/imagePost 1.svg";
import ImagePost2 from "./assets/imagePost 2.svg";
import ImagePost3 from "./assets/imagePost 3.svg";
import Member1 from "./assets/member1.jpg";
import Member2 from "./assets/member2.jpg";
import Member3 from "./assets/member3.jpg";
import Goal1 from "./assets/Objetivo 1.svg";
import Goal2 from "./assets/Objetivo 2.svg";
import Goal3 from "./assets/Objetivo 3.svg";
import Goal4 from "./assets/Objetivo 4.svg";

export const images = [
  {
    src: Unplash,
    alt: 'Imagem de mãos de um homem, cada uma segurando um halter, relógio de pulso na mão esquerda, na mão direita há uma tatuagem no pulso onde está escrito "FANTASY > REALITY". Há uma academia ao fundo',
    title: (
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontWeight: 700,
          fontSize: "56px",
          lineHeight: "65.63px",
        }}
      >
        AJUDANDO VOCÊ A TER
        <Box sx={{ color: "var(--orange1)" }}>MAIS PERFORMANCE</Box>
      </Typography>
    ),
    text: (
      <Typography
        sx={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
          color: "var(--white)",
          maxWidth: "349px",
          mt: "16px",
        }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </Typography>
    ),
    textButton: "confira",
  },
  {
    src: Unplash2,
    alt: "Imagem do braço de um homem segurando um halter.",
    title: (
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontWeight: 700,
          fontSize: "56px",
          lineHeight: "65.63px",
        }}
      >
        APROVEITE NOSSAS
        <Box sx={{ color: "var(--orange1)" }}>PROMOÇÕES</Box>
      </Typography>
    ),
    text: (
      <Typography
        sx={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
          color: "var(--white)",
          maxWidth: "349px",
          mt: "16px",
        }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </Typography>
    ),
    textButton: "confira AQUI",
  },
  {
    src: Unplash,
    alt: 'Imagem de mãos de um homem, cada uma segurando um halter, relógio de pulso na mão esquerda, na mão direita há uma tatuagem no pulso onde está escrito "FANTASY > REALITY". Há uma academia ao fundo',
    title: (
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontWeight: 700,
          fontSize: "56px",
          lineHeight: "65.63px",
        }}
      >
        AJUDANDO VOCÊ A TER
        <Box sx={{ color: "var(--orange1)" }}>MAIS PERFORMANCE</Box>
      </Typography>
    ),
    text: (
      <Typography
        sx={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
          color: "var(--white)",
          maxWidth: "349px",
          mt: "16px",
        }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </Typography>
    ),
    textButton: "Confira",
  },
];

export const categories = [
  {
    title: "Proteínas",
    image: Category,
  },
  {
    title: "hipercalóricos",
    image: Category,
  },
  {
    title: "CREATINA",
    image: Category,
  },
  {
    title: "packs",
    image: Category,
  },
  {
    title: "aminoácidos",
    image: Category,
  },
  {
    title: "saúde",
    image: Category,
  },
  {
    title: "saúde",
    image: Category,
  },
  {
    title: "saúde",
    image: Category,
  },
  {
    title: "saúde",
    image: Category,
  },
  {
    title: "saúde",
    image: Category,
  },
];

export const products = [
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
  {
    title: "Whey Zero (COM LACTASE) BLACK SKULL - 900G",
    image: Product,
    price: "R$ 349,90",
    parcel: "ou 12x de R$ 29,16",
  },
];

export const postsBlog = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "03.05.21",
    image: ImagePost1,
    alt: "Imagem das pernas e braços de um homem que está levantando uma barra com pesos, ao fundo há um piso emborrachado",
    link: "https://blog.blackskullusa.com.br/",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "03.05.21",
    alt: "Imagem de uma mulher de costa, ela segura uma corda com a mão esquerda enquanto olha para o lado, ao fundo há um suporte com várias barras",
    image: ImagePost2,
    link: "https://blog.blackskullusa.com.br/",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "03.05.21",
    alt: "Imagem de um homem treinando com cordas, ao fundo há um parapeito, o parapeito é feito de cabos de aço e é possivel ver prédios ao fundo",
    image: ImagePost3,
    link: "https://blog.blackskullusa.com.br/",
  },
];

export const members = [
  {
    image: Member1,
    name: "Cedric McMillan",
    link: "blog.blackskullusa.com.br",
  },
  {
    image: Member2,
    name: "Cedric McMillan",
    link: "blog.blackskullusa.com.br",
  },
  {
    image: Member3,
    name: "Cedric McMillan",
    link: "blog.blackskullusa.com.br",
  },
];

export const goals = [
  {
    image: Goal1,
    name: "Ganho de Massa",
  },
  {
    image: Goal2,
    name: "Energia",
  },
  {
    image: Goal3,
    name: "Recuperação Muscular",
  },
  {
    image: Goal4,
    name: "Emagrecimento",
  },
];

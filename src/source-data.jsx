import { Box, Typography } from "@mui/material";
import Unplash from "./assets/unsplash.jpg";
import Unplash2 from "./assets/unsplash2.jpg";
import Category from "./assets/category.svg";

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

import { Box, Typography } from "@mui/material";
import BackToTop from "../components/BackToTop";
import Carousel from "../components/Carousel";
import CarouselCategory from "../components/CarouselCategory";
import CarouselProduct from "../components/CarouselProducts";
import NavBar from "../components/NavBar";
import { infos, products } from "../source-data";
import SectionBlog from "../components/SectionBlog";
import SectionTroopSkull from "../components/SectionTroopSkull";
import ListGoal from "../components/ListGoal";
import CardInfo from "../components/CardInfo";
import AboutBlackSkull from "../components/AboutBlackSkull";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <CarouselCategory />
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37.5px",
          textAlign: "center",
          mt: "64px",
          mb: "24px",
        }}
      >
        LANÇAMENTOS
      </Typography>
      <CarouselProduct products={products} />
      <SectionTroopSkull />
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37.5px",
          textAlign: "center",
          mt: "64px",
          mb: "24px",
        }}
      >
        PROMOÇÕES
      </Typography>
      <CarouselProduct products={products} />
      <SectionBlog />
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37.5px",
          textAlign: "center",
          mt: "64px",
          mb: "24px",
        }}
      >
        OBJETIVOS
      </Typography>
      <ListGoal />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "64px",
          mb: "64px",
        }}
      >
        <CardInfo
          figure={infos[0].figure}
          link={infos[0].link}
          text={infos[0].text}
          textColor={infos[0].textColor}
          textButton={infos[0].textButton}
        />
        <CardInfo
          figure={infos[1].figure}
          link={infos[1].link}
          text={infos[1].text}
          textColor={infos[1].textColor}
          textButton={infos[1].textButton}
          rotateLeft
        />
      </Box>
      <AboutBlackSkull />
      <BackToTop />
    </>
  );
}

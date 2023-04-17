import { Typography } from "@mui/material";
import BackToTop from "../components/BackToTop";
import Carousel from "../components/Carousel";
import CarouselCategory from "../components/CarouselCategory";
import CarouselProduct from "../components/CarouselProducts";
import NavBar from "../components/NavBar";
import { products } from "../source-data";
import SectionBlog from "../components/SectionBlog";
import SectionTroopSkull from "../components/SectionTroopSkull";
import ListGoal from "../components/ListGoal";

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
      <ListGoal />
      <BackToTop />
    </>
  );
}

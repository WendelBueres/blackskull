import BackToTop from "../components/BackToTop";
import Carousel from "../components/Carousel";
import CarouselCategory from "../components/CarouselCategory";
import CarouselProduct from "../components/CarouselProducts";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <CarouselCategory />
      <CarouselProduct />
      <BackToTop />
    </>
  );
}

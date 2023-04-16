import BackToTop from "../components/BackToTop";
import CardCategory from "../components/CardCategory";
import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <CardCategory />
      <BackToTop />
    </>
  );
}

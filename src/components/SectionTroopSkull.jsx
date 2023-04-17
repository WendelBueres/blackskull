import { Box } from "@mui/joy";
import Background from "../assets/Troop Image.png";
import CarouselTroopSkull from "./CarouselTroopSkull";

export default function SectionTroopSkull() {
  return (
    <Box>
      <Box
        component={"img"}
        src={Background}
        width={"100%"}
        position={"absolute"}
      />
      ;
      <Box>
        <CarouselTroopSkull />
      </Box>
    </Box>
  );
}

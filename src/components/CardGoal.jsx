import { Box, Typography } from "@mui/material";
import { ReactComponent as Rectangle } from "../assets/Rectangle.svg";
import { ReactComponent as Rectangle2 } from "../assets/Rectangle 2.svg";

export default function CardGoal({ image, goal }) {
  return (
    <Box
      sx={{
        width: "277px",
        height: "340px",
        ml: "10px",
        mr: "10px",
        img: { transition: "1s", WebkitFilter: "grayscale(100%)" },
        ":hover img": {
          transition: "1s",
          WebkitFilter: "none",
          transform: "scale(1.1)",
        },
        ":hover .nameGoal": {
          transition: "1s",
          borderTop: "40px solid var(--orange2)",
        },
        ":hover .rectangle1": {
          transition: "0.5s",
          opacity: "1",
          transform: "translateX(40px)",
        },
        ":hover .rectangle2": {
          transition: "0.5s",
          opacity: "1",
          transform: "translateX(40px)",
        },
      }}
    >
      <Box sx={{ flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            flexDirection: "column-reverse",
            width: "277px",
            height: "340px",
            overflow: "hidden",
          }}
        >
          <Box component={"img"} src={image} />
          <Box
            className="nameGoal"
            sx={{
              transition: "1s",
              p: 0,
              m: 0,
              borderRadius: 0,
              position: "absolute",
              width: "212px",
              bgcolor: "transparent",
              borderTop: "40px solid var(--orange1)",
              borderLeft: "transparent",
              borderRight: "20px solid transparent",
              borderBottom: "transparent",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "362px",
            display: "flex",
            WebkitAlignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              pb: "12px",
              pl: "16px",
              display: "flex",
              flexDirection: "row",
              width: "141px",
              height: "40px",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "16px",
              color: "var(--black1)",
              fontStyle: "italic",
              userSelect: "none",
            }}
          >
            {goal}
          </Typography>
          <Box
            className="rectangle1"
            sx={{
              opacity: "0.5",
              transition: "0.5s",
              mb: "22px",
              ml: "23px",
              mr: "-10px",
              height: "40px",
            }}
          >
            <Rectangle />
          </Box>
          <Box
            className="rectangle2"
            sx={{
              opacity: "0.5",
              transition: "0.5s",
              mb: "22px",
              height: "40px",
            }}
          >
            <Rectangle2 />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

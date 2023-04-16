import { Box, CardActionArea, CardMedia, Typography } from "@mui/material";
import circle from "../assets/Ellipse.svg";
import circle2 from "../assets/Ellipse 2.svg";
import circle3 from "../assets/Ellipse 3.svg";

export default function CardCategory({ category, index, length }) {
  return (
    <CardActionArea
      key={index}
      label={index}
      value={index}
      sx={{
        mt: "56px",
        ml: index > 0 ? "10px" : "0px",
        mr: index < length - 1 ? "0px" : "10px",
        display: "flex",
        flexDirection: "column",
        width: "178px",
        height: "210px",
        color: "transparent",
        zIndex: 1,
        ":hover": { color: "transparent" },
        ":hover .category-image": {
          transition: "all 0.3s ease-in-out",
          transform: "scale(1.5)",
        },
        ":hover .circle": {
          transition: "all 0.3s ease-in-out",
          transform: "scale(2.55)",
        },
        ".circle": {
          transition: "all 0.3s ease-in-out",
        },
        ".category-image": {
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      {/* background */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "178px",
            height: "178px",
          }}
          image={circle}
        />
        <CardMedia
          component="img"
          className="circle"
          sx={{
            position: "absolute",
            width: "70px",
            height: "70px",
          }}
          image={circle2}
        />
        <CardMedia
          component="img"
          className="circle"
          sx={{
            position: "absolute",
            width: "65px",
            height: "65px",
            display: "flex",
          }}
          image={circle3}
        />
        <CardMedia
          component="img"
          className="category-image"
          sx={{
            position: "absolute",
            width: "108px",
            height: "108px",
          }}
          image={category.image}
        />
      </Box>

      {/* text */}
      <Typography
        sx={{
          color: "var(--dark1)",
          mt: "16px",
          fontWeight: 700,
          lineHeight: "16px",
          fontSize: "12px",
          fontFamily: "Barlow, sans-serif",
          textTransform: "uppercase",
        }}
      >
        {category.title}
      </Typography>
    </CardActionArea>
  );
}

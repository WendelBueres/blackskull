import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as ArrowSquare } from "../assets/ArrowSquareOut.svg";

export default function CardPost({
  image,
  textAlternative,
  title,
  date,
  link,
  index,
  length,
}) {
  return (
    <Box
      sx={{
        ml: index === 0 ? "0" : "10px",
        mr: index === length - 1 ? "0px" : "10px",
        backgroundColor: "var(--dark1)",
        border: "solid 1px var(--dark3)",
        height: "380px",
        width: "376px",
        img: {
          transition: "transform 0.5s ease",
        },
        ".iconArrow": {
          transition: "transform 0.5s ease",
        },
        ":hover img": {
          transform: "scale(1.3)",
          transition: "transform 0.5s ease",
        },
        ":hover .iconArrow": {
          transform: "translateX(40px)",
          transition: "transform 0.5s ease",
        },
      }}
    >
      <Box
        sx={{
          width: "376px",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <Box
          component={"img"}
          src={image}
          alt={textAlternative}
          sx={{ overflow: "hidden", objectFit: "contain" }}
        />
      </Box>
      <Box sx={{ ".titlePost": { whiteSpace: "pre-line" } }}>
        <Typography
          sx={{
            color: "var(--white)",
            ml: "24px",
            mt: "15px",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "16.8px",
            zIndex: 2,
          }}
        >
          {date}
        </Typography>
        <Typography
          className="titlePost"
          sx={{
            maxWidth: "320px",
            color: "var(--white)",
            display: "flex",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "21.6px",
            flexWrap: "wrap",
            textTransform: "uppercase",
            ml: "24px",
            mt: "16px",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Button
            variant="contained"
            onClick={() => window.open({ link })}
            sx={{
              m: 0,
              p: "10px 35.5px",
              gap: "10px",
              borderRadius: "2px",
              ml: "24px",
              mt: "24px",
              mb: "24px",
              fontWeight: 700,
              fontSize: "14px",
              fontFamily: "Barlow, sans-serif",
              lineHeight: "20px",
              color: "var(--black1)",
              bgcolor: "var(--orange1)",
              ":hover": { bgcolor: "var(--orange2)" },
            }}
          >
            Ler Mais
          </Button>
          <Box className="iconArrow" sx={{ ml: -4 }}>
            <ArrowSquare />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

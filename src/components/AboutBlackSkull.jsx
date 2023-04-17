import { Box, Typography } from "@mui/material";
import { ReactComponent as Bottom } from "../assets/Bottom Skull.svg";

export default function AboutBlackSkull() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "643px",
          height: "278px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "absolute" }}>
          <Bottom />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "37.5px",
              textAlign: "center",
              width: "100%",
              userSelect: "none",
              mt: "212px",
              mb: "26px",
              color: "var(--dark1)",
            }}
          >
            SOBRE A BLACK SKULL
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              lineHeight: "20px",
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Barlow, sans-serif",
              color: "var(--dark3)",
            }}
          >
            A Black Skull USA é uma marca de suplementos alimentares com foco em
            atletas de alta performance. Nossa sede no Brasil está alocada em
            Embu das Artes – SP, com mais de 12.000 m² de área construída, com
            alta capacidade produtiva. Nossos produtos trabalham com as melhores
            matérias-primas do mercado e tem como principal característica maior
            concentração de insumos, que proporcionam níveis de pureza mais
            altos e por consequência otimizam a qualidade de nossos produtos.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

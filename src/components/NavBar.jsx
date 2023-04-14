import { AppBar, Box, Typography } from "@mui/material";
import { ReactComponent as Truck } from "../assets/truck.svg";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "var(--dark1)" }}>
      <Box
        sx={{
          pl: "56px",
          pr: "56px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            color: "var(--orange1)",
            userSelect: "none",
            ":hover": { cursor: "pointer", color: "var(--orange2)" },
            ":active": { cursor: "pointer", color: "var(--orange1)" },
          }}
        >
          FALE CONOSCO
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Truck />
          <Typography
            sx={{
              fontFamily: "Barlow, sans-serif",
              fontSize: "10px",
              ml: "11.25px",
              color: "var(--gray2)",
              fontWeight: 500,
              userSelect: "none",
            }}
          >
            FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            color: "var(--orange1)",
            userSelect: "none",
            ":hover": { cursor: "pointer", color: "var(--orange2)" },
            ":active": { cursor: "pointer", color: "var(--orange1)" },
          }}
        >
          BLOG.BLACKSKULL
        </Typography>
      </Box>
    </AppBar>
  );
}

import { AppBar, Box, ButtonBase, Typography } from "@mui/material";
import { ReactComponent as Truck } from "../assets/truck.svg";
import { ReactComponent as Logotipo } from "../assets/logotipo.svg";
import InputSearch from "./InputSearch";

export default function NavBar() {
  const pages = [
    "CATEGORIAS",
    "VESTUÁRIO",
    "OBJETIVOS",
    "PROMOÇÕES",
    "ATLETAS",
    "ASSINATURA",
  ];

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
          onClick={() => window.open("https://blog.blackskullusa.com.br/")}
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pr: "56px",
          pl: "56px",
          minHeight: "72px",
          justifyContent: "space-between",
          bgcolor: "var(--black1)",
          borderBottom: "3px solid var(--dark2)",
          flexWrap: "wrap",
        }}
      >
        <Logotipo />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {pages.map((page) => (
            <Box
              sx={{
                transition: "linear 0.25s",
                width: "103px",
                height: "72px",
                overflow: "hidden",
                ":hover .line": {
                  transition: "linear 0.25s",
                  transform: "translateX(100%)",
                  cursor: "pointer",
                },
                ":focus .line": {
                  transition: "linear 0.25s",
                  transform: "translateX(100%)",
                  cursor: "pointer",
                },
                ":hover p": {
                  transition: "linear 0.25s",
                  color: "var(--white)",
                },
                ":hover": {
                  transition: "linear 0.25s",
                  bgcolor: "var(--dark3)",
                },
              }}
            >
              <ButtonBase sx={{ width: "100%", height: "74px" }}>
                <Typography
                  key={page}
                  sx={{
                    my: 2,
                    color: "var(--gray1)",
                    userSelect: "none",
                    ":hover": {
                      color: "var(--gray2)",
                    },
                  }}
                >
                  {page}
                </Typography>
              </ButtonBase>
              <Box
                className="line"
                sx={{
                  transition: "linear 0.25s",
                  display: "flex",
                  alignItems: "end",
                  height: "2.5px",
                  marginTop: "-5px",
                  marginLeft: "-100%",
                  width: "100%",
                  bgcolor: "var(--orange1)",
                }}
              />
            </Box>
          ))}
        </Box>
        <InputSearch />
      </Box>
    </AppBar>
  );
}

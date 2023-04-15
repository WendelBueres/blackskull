import { Box, ButtonBase, Typography } from "@mui/material";

export default function Filters() {
  const pages = [
    "CATEGORIAS",
    "VESTUÁRIO",
    "OBJETIVOS",
    "PROMOÇÕES",
    "ATLETAS",
    "ASSINATURA",
  ];

  return (
    <Box
      sx={{
        ml: "31px",
        display: "flex",
        flexDirection: "row",
        maxWidth: "618px",
      }}
    >
      {pages.map((page) => (
        <Box
          sx={{
            transition: "linear 0.25s",
            width: "105px",
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
          <ButtonBase sx={{ width: "100%", height: "74px" }} disableRipple>
            <Typography
              key={page}
              sx={{
                my: 2,
                color: "var(--gray1)",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "700",
                fontSize: "14px",
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
  );
}

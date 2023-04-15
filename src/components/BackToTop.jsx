import { ButtonBase, Typography } from "@mui/material";
import { ReactComponent as Arrow } from "../assets/arrowUp.svg";
import { ReactComponent as Chat } from "../assets/ChatDots.svg";
import { Box } from "@mui/system";

export default function BackToTop() {
  return (
    <Box
      sx={{
        position: "sticky",
        display: "grid",
        bottom: "calc(10vh)",
        mt: "-10vh",
        zIndex: 0,
      }}
    >
      <ButtonBase
        onClick={() => window.scrollTo(0, 0)}
        disableRipple
        sx={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          left: "calc(100vw - 110px)",
          width: "56px",
          height: "56px",
          bgcolor: "var(--dark3)",
          border: "1px solid var(--gray1)",
          ":hover": {
            cursor: "pointer",
            bgcolor: "var(--orange1)",
            borderColor: "var(--black)",
          },
          ":hover path": {
            stroke: "#0B0B0B",
          },
        }}
      >
        <Arrow />
      </ButtonBase>
      <ButtonBase
        disableRipple
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "128px",
          height: "40px",
          bgcolor: "var(--orange1)",
          left: "calc(100vw - 182px)",
          mt: "10px",
          border: "1px solid var(--dark3)",
          borderRadius: "6px 6px 0px 6px",
          p: "10px",
          ":hover": {
            bgcolor: "var(--orange2)",
          },
        }}
      >
        <Chat />
        <Typography
          sx={{
            ml: "6px",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          Fale Conosco
        </Typography>
      </ButtonBase>
    </Box>
  );
}

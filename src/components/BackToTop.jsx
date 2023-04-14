import { ButtonBase } from "@mui/material";
import { ReactComponent as Arrow } from "../assets/arrowUp.svg";

export default function BackToTop() {
  return (
    <ButtonBase
      onClick={() => window.scrollTo(0, 0)}
      disableRipple
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "calc(100vh - 260px)",
        left: "calc(100vw - 110px)",
        borderRadius: "4px",
        width: "56px",
        height: "56px",
        bgcolor: "var(--dark3)",
        border: "1px solid var(--gray1)",
        zIndex: 1,
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
  );
}

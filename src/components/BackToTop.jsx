import { ButtonBase } from "@mui/material";
import { ReactComponent as Arrow } from "../assets/arrowUp.svg";

export default function BackToTop() {
  return (
    <ButtonBase
      onClick={() => window.scrollTo(0, 0)}
      disableRipple
      sx={{
        position: "sticky",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        bottom: "calc(20vh)",
        left: "calc(100vw - 110px)",
        borderRadius: "4px",
        width: "56px",
        height: "56px",
        mt: "-56px",
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
  );
}

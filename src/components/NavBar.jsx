import { AppBar, Box } from "@mui/material";
import { ReactComponent as Logotipo } from "../assets/logotipo.svg";
import InputSearch from "./InputSearch";
import Filters from "./Filters";
import InfoBar from "./InfoBar";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "var(--dark1)" }}>
      <InfoBar />
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
        <Filters />
        <InputSearch />
      </Box>
    </AppBar>
  );
}

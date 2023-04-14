import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { InputBase } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/magnifyingGlass.svg";

export default function InputSearch() {
  const [click, setClick] = useState(false);
  const [value, setValue] = useState("");

  function handleClearClick() {
    setClick(false);
    setValue("");
  }

  return (
    <>
      <InputBase
        placeholder="Buscar"
        sx={{
          fontStyle: { color: "var(--white)" },
          bgcolor: "var(--dark2)",
          border: click ? "1px solid var(--gray2)" : "1px solid var(--dark3)",
          borderRadius: "4px",
          after: { ml: "15px" },
          height: "40px",
          p: "0 11px",
          width: "216px",
        }}
        disabled={false}
        variant="solid"
        value={value}
        onChange={(newValue) => {
          setValue(newValue.target.value);
        }}
        onFocus={() => setClick(true)}
        defaultValue={value}
        endAdornment={
          value | click ? (
            <ClearIcon
              onClick={handleClearClick}
              sx={{
                color: "var(--white)",
                ":hover": { cursor: "pointer" },
              }}
            />
          ) : (
            <SearchIcon />
          )
        }
      />
    </>
  );
}

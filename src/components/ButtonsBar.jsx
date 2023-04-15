import { Box, IconButton } from "@mui/material";
import { ReactComponent as User } from "../assets/User.svg";
import { ReactComponent as Whishlist } from "../assets/Whishlist.svg";
import { ReactComponent as ShoppingCart } from "../assets/ShoppingCart.svg";

export default function ButtonsBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", ml: "6px" }}>
      <IconButton
        key={"buttonUser"}
        sx={{ ":hover path": { stroke: "var(--white)" } }}
        disableTouchRipple
      >
        <User />
      </IconButton>
      <IconButton
        key={"buttonWhishlist"}
        sx={{ ":hover path": { stroke: "var(--white)" } }}
        disableTouchRipple
      >
        <Whishlist />
      </IconButton>
      <IconButton
        key={"buttonShoppingCart"}
        sx={{ ":hover path": { stroke: "var(--white)" } }}
        disableTouchRipple
      >
        <ShoppingCart />
      </IconButton>
    </Box>
  );
}

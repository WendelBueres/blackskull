import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { products } from "../source-data";
import { ReactComponent as Whishlist } from "../assets/Whishlist.svg";
import { ReactComponent as ShoppingCart } from "../assets/ShoppingCart.svg";

export default function CardProduct({ product, index, length }) {
  length = 1;
  product = products[0];
  index = 0;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          zIndex: 2,
          ml: "230px",
          mt: "22px",
        }}
      >
        <IconButton
          disableRipple
          sx={{ p: 0, mb: "20px", ":hover path": { stroke: "var(--black1)" } }}
        >
          <Whishlist />
        </IconButton>
        <IconButton
          disableRipple
          sx={{ p: 0, ":hover path": { stroke: "var(--black1)" } }}
        >
          <ShoppingCart />
        </IconButton>
      </Box>
      <CardActionArea
        key={index}
        label={index}
        value={index}
        sx={{
          mt: "56px",
          ml: index > 0 ? "10px" : "0px",
          mr: index < index.length - 1 ? "0px" : "10px",
          p: "32px 16px 28px 24px",
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          width: "277px",
          height: "341px",
          color: "transparent",
          borderRadius: "4px",
          border: "1px solid var(--background)",
          zIndex: 1,
          ":hover": { color: "transparent" },
        }}
      >
        {/* image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "230px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              className="category-image"
              sx={{
                width: "165px",
                height: "165px",
              }}
              image={product.image}
            />
          </Box>
        </Box>

        {/* text */}
        <Typography
          sx={{
            color: "var(--black1)",
            mt: "24px",
            fontWeight: 600,
            maxWidth: "182px",
            lineHeight: "16px",
            fontSize: "12px",
            fontFamily: "Barlow, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            color: "var(--orange1)",
            fontWeight: 700,
            lineHeight: "26px",
            fontSize: "22px",
            fontFamily: "Barlow, sans-serif",
            textTransform: "uppercase",
            mt: "16px",
          }}
        >
          {product.price}
        </Typography>
        <Typography
          sx={{
            mt: "4px",
            color: "var(--dark3)",
            fontWeight: 400,
            lineHeight: "26px",
            fontSize: "14px",
            fontFamily: "Barlow, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {product.parcel}
        </Typography>
      </CardActionArea>
    </Box>
  );
}

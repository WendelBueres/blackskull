import { Box, IconButton, ListItem, Tabs } from "@mui/material";
import { products } from "../source-data";
import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import CardProduct from "./CardProduct";

export default function CarouselProduct() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ListItem
        sx={{
          display: "flex",
          gap: "10px",
          width: "95.5vw",
          zIndex: 0,
        }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="transparent"
          ScrollButtonComponent={(props) => {
            const { direction, ...other } = props;

            if (direction === "left") {
              return (
                <IconButton
                  disableRipple
                  sx={{
                    bgcolor: "var(--gray2)",
                    borderRadius: "4px",
                    width: "32px",
                    mt: "25px",
                    height: "32px",
                    right: "-10px",
                    mr: "-5px",
                    zIndex: 2,
                    ":hover": { bgcolor: "var(--orange2)" },
                  }}
                  {...other}
                  disabled={false}
                >
                  <ArrowLeft
                    sx={{
                      color: "var(--dark1)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      bgcolor: "var(--gray1)",
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
              );
            } else {
              return (
                <IconButton
                  disableRipple
                  sx={{
                    bgcolor: "var(--gray2)",
                    borderRadius: "4px",
                    width: "32px",
                    mt: "25px",
                    height: "32px",
                    ml: "-15px",
                    zIndex: 2,
                    ":hover": { bgcolor: "var(--orange2)" },
                  }}
                  {...other}
                  disabled={false}
                >
                  <ArrowRight
                    sx={{
                      color: "var(--dark1)",
                      right: "-10px",
                      transform: "translateY(-50%)",
                      bgcolor: "var(--gray1)",
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
              );
            }
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {products.map((product, index) => {
            return (
              <CardProduct
                product={product}
                index={index}
                length={products.length}
              />
            );
          })}
        </Tabs>
      </ListItem>
    </Box>
  );
}

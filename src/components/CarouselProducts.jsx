/* eslint-disable react-hooks/exhaustive-deps */
import { Box, IconButton, ListItem, Tabs } from "@mui/material";
import { ReactComponent as ArrowLeft } from "../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as Active } from "../assets/Rectangle image select.svg";
import { ReactComponent as Inactive } from "../assets/Rectangle image unselect.svg";
import CardProduct from "./CardProduct";
import { useEffect, useState } from "react";

export default function CarouselProduct({ products }) {
  const listSelectors = [];
  const [numberSelectors, setNumberSelectors] = useState(0);
  const [selectors, setSelectors] = useState([]);
  const [indexScroll, setIndexScroll] = useState(0);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  function handleSelectors() {
    if (width >= 768 && width < 993) {
      setNumberSelectors(Math.ceil(products.length / 2));
    }
    if (width >= 993 && width < 1313) {
      const result = Math.ceil(products.length / 3);
      setNumberSelectors(result);
    }
    if (width >= 1313 && width < 1624) {
      setNumberSelectors(Math.ceil(products.length / 4));
    }
    if (width >= 1624 && width < 1935) {
      setNumberSelectors(Math.ceil(products.length / 5));
    }
    if (width >= 1935 && width < 2245) {
      setNumberSelectors(Math.ceil(products.length / 6));
    }
    if (width >= 2245 && width < 2557) {
      setNumberSelectors(Math.ceil(products.length / 7));
    }
    if (width >= 2557) {
      setNumberSelectors(Math.ceil(products.length / 8));
    }

    for (let index = 0; index < numberSelectors; index++) {
      if (index === indexScroll) {
        listSelectors.push(Active);
      } else {
        listSelectors.push(Inactive);
      }
    }
    setSelectors(listSelectors);
  }

  useEffect(
    () => setWidth(document.documentElement.clientWidth),
    [document.documentElement.clientWidth]
  );
  useEffect(() => handleSelectors(), []);
  useEffect(() => handleSelectors(), [indexScroll]);
  useEffect(() => handleSelectors(), [width]);

  return (
    <Box>
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
                    onClick={() => {
                      other.onClick();
                      if (other.disabled === false) {
                        setIndexScroll(indexScroll - 1);
                      }
                    }}
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
                    onClick={() => {
                      other.onClick();
                      if (other.disabled === false) {
                        setIndexScroll(indexScroll + 1);
                      }
                    }}
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
            TabIndicatorProps={{
              color: "secondary",
              height: "4px",
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
                  key={index}
                  product={product}
                  index={index}
                  length={products.length}
                />
              );
            })}
          </Tabs>
        </ListItem>
      </Box>
      {/* Selectors */}
      <ListItem
        sx={{
          mt: "71px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          mb: "64px",
        }}
      >
        {selectors.map((_, i) => {
          return i !== indexScroll ? (
            <IconButton key={i} disableTouchRipple disableRipple disabled>
              <Inactive />
            </IconButton>
          ) : (
            <IconButton
              key={i}
              sx={{
                ":hover path": {
                  stroke: "var(--white)",
                },
              }}
              disableTouchRipple
              disableRipple
              disabled
            >
              <Active />
            </IconButton>
          );
        })}
      </ListItem>
    </Box>
  );
}

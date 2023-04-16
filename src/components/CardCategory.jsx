import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  ListItem,
  Tabs,
  Typography,
} from "@mui/material";
import { categories } from "../source-data";
import circle from "../assets/Ellipse.svg";
import circle2 from "../assets/Ellipse 2.svg";
import circle3 from "../assets/Ellipse 3.svg";
import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
export default function CardCategory() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ListItem
        sx={{
          display: "flex",
          gap: "10px",
          pb: 2,
          width: "95.5vw",
          ml: 8,
          mr: 8,
          zIndex: 0,
        }}
      >
        <Tabs
          onChange={handleChange}
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="transparent"
          ScrollButtonComponent={(props, ref) => {
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
                      position: "absolute",
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
                      zIndex: 1,
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
          {categories.map((category, index) => {
            return (
              <CardActionArea
                key={index}
                label={index}
                value={index}
                sx={{
                  mt: "56px",
                  ml: index > 0 ? "10px" : "0px",
                  mr: index < index.length - 1 ? "0px" : "10px",
                  display: "flex",
                  flexDirection: "column",
                  width: "178px",
                  height: "210px",
                  color: "transparent",
                  zIndex: 1,
                  ":hover": { color: "transparent" },
                  ":hover .category-image": {
                    transition: "all 0.3s ease-in-out",
                    transform: "scale(1.5)",
                  },
                  ":hover .circle": {
                    transition: "all 0.3s ease-in-out",
                    transform: "scale(2.55)",
                  },
                  ".circle": {
                    transition: "all 0.3s ease-in-out",
                  },
                  ".category-image": {
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                {/* background */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "178px",
                      height: "178px",
                    }}
                    image={circle}
                  />
                  <CardMedia
                    component="img"
                    className="circle"
                    sx={{
                      position: "absolute",
                      width: "70px",
                      height: "70px",
                    }}
                    image={circle2}
                  />
                  <CardMedia
                    component="img"
                    className="circle"
                    sx={{
                      position: "absolute",
                      width: "65px",
                      height: "65px",
                      display: "flex",
                    }}
                    image={circle3}
                  />
                  <CardMedia
                    component="img"
                    className="category-image"
                    sx={{
                      position: "absolute",
                      width: "108px",
                      height: "108px",
                    }}
                    image={category.image}
                  />
                </Box>

                {/* text */}
                <Typography
                  sx={{
                    color: "var(--dark1)",
                    mt: "16px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontFamily: "Barlow, sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  {category.title}
                </Typography>
              </CardActionArea>
            );
          })}
        </Tabs>
      </ListItem>
    </Box>
  );
}

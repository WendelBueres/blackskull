/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ReactComponent as Active } from "../assets/Rectangle image select.svg";
import { ReactComponent as Inactive } from "../assets/Rectangle image unselect.svg";
import { Button, IconButton, ListItem, Typography } from "@mui/material";
import { images } from "../source-data";

export default function Carousel() {
  const listSelectors = [];
  const [selectors, setSelectors] = useState([]);
  const [indexImage, setIndexImage] = useState(0);

  function handleSelectors() {
    images.forEach((_, index) => {
      if (index === indexImage) {
        listSelectors.push(Active);
      } else {
        listSelectors.push(Inactive);
      }
      setSelectors(listSelectors);
    });
  }

  useEffect(() => handleSelectors, [indexImage]);

  function changeIndex(i) {
    setIndexImage(i);
  }

  return (
    <Box>
      {/* Image */}
      <Box
        component="img"
        src={images[indexImage].src}
        alt={images[indexImage].alt}
        sx={{
          maxHeight: "546px",
          width: "calc(100%)",
          m: 0,
        }}
      />

      {/* Text and button */}
      <Box
        sx={{
          position: "absolute",
          mt: "-420px",
          ml: "11vw",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontStyle: "italic",
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: "65.63px",
            textTransform: "uppercase",
          }}
        >
          {images[indexImage].title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            color: "var(--white)",
            maxWidth: "349px",
            mt: "16px",
          }}
        >
          {images[indexImage].text}
        </Typography>

        <Button
          disableRipple
          variant="contained"
          sx={{
            mt: "32px",
            bgcolor: "var(--orange1)",
            p: "14px, 24px",
            borderRadius: "4px",
            gap: "10px",
            minWidth: "120px",
            minHeight: "48px",
            ":hover": {
              bgcolor: "var(--orange2)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Barlow, sans-serif",
              color: "var(--black1)",
              lineHeight: "20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {images[indexImage].textButton}
          </Typography>
        </Button>
      </Box>

      {/* Selectors */}
      <ListItem
        sx={{
          mt: "-40px",
          display: "flex",
          width: "calc(100%)",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        {selectors.map((_, i) => {
          return i !== indexImage ? (
            <IconButton
              key={i}
              onClick={() => changeIndex(i)}
              disableTouchRipple
              disableRipple
            >
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
            >
              <Active />
            </IconButton>
          );
        })}
      </ListItem>
    </Box>
  );
}

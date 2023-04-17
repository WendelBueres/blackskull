import { Box, Button, Typography } from "@mui/material";
import CarouselBlog from "./CarouselBlog";

export default function SectionBlog() {
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%)",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            zIndex: 0,
            pl: "56px",
            pr: "56px",
            pt: "41px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontStyle: "italic",
              color: "var(--white)",
              userSelect: "none",
              fontSize: "32px",
              lineHeight: "37.5px",
              fontweight: 700,
              fontFamily: "Roboto Condensed, sans-serif",
              whiteSpace: "pre",
            }}
          >
            CONFIRA O{" "}
            <Typography
              sx={{
                color: "var(--orange1)",
                fontSize: "32px",
                lineHeight: "37.5px",
                fontweight: 700,
                fontFamily: "Roboto Condensed, sans-serif",
              }}
            >
              NOSSO BLOG
            </Typography>
          </Typography>
          <Button
            variant="contained"
            sx={{
              m: 0,
              p: "14px 24px",
              borderRadius: "4px",
              gap: "10px",
              color: "var(--black1)",
              bgcolor: "var(--orange1)",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.13em",
              fontFamily: "Barlow, sans-serif",
              ":hover": { bgcolor: "var(--orange2)" },
            }}
            onClick={() => window.open("https://blog.blackskullusa.com.br/")}
          >
            LER TODOS
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CarouselBlog />
        </Box>
      </Box>
    </>
  );
}

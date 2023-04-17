import { Box, Button, Typography } from "@mui/material";

export default function CardInfo({
  figure,
  text,
  textColor,
  link,
  textButton,
  rotateLeft,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alingItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        background: "linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%)",
        width: "475px",
        height: "280px",
        ":hover img": {
          transition: "transform 0.5s",
          transform: rotateLeft
            ? "translate(0, -15%) rotateZ(-160deg)"
            : "translate(0, -15%) rotateZ(80deg) ",
        },
      }}
    >
      <Box sx={{ width: "227px", pr: "4px", height: "100%", mt: "40px" }}>
        <Typography
          sx={{
            color: "var(--white)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "40px",
            lineHeight: "46.88px",
            fontFamily: "Roboto Condensed, sans-serif",
            whiteSpace: "pre",
          }}
        >
          {text}
          <Typography
            sx={{
              color: "var(--orange1)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "40px",
              lineHeight: "46.88px",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            {textColor}
          </Typography>
        </Typography>
        <Button
          disableRipple
          variant="contained"
          sx={{
            m: 0,
            mt: "24px",
            p: "10px 24px",
            borderRadius: "4px",
            gap: "10px",
            bgcolor: "var(--orange1)",
            color: "var(--black1)",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            ":hover": { bgcolor: "var(--orange2)" },
          }}
          onClick={() => window.open(link)}
        >
          {textButton}
        </Button>
      </Box>
      <Box
        component={"img"}
        src={figure}
        sx={{
          transition: "0.5s",
          width: "180px",
          ml: "8px",
          mt: "40px",
          height: "100%",
        }}
      />
    </Box>
  );
}

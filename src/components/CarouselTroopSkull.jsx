import {
  Box,
  Button,
  IconButton,
  ListItem,
  Tabs,
  Typography,
} from "@mui/material";
import { ReactComponent as ArrowLeft } from "../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { members } from "../source-data";

export default function CarouselTroopSkull() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "31vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ ml: -41 }}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              color: "var(--white)",
              whiteSpace: "pre",
              mt: "24px",
              mb: "24px",
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "40px",
              lineHeight: "46.88px",
            }}
          >
            CONHEÇA A TROPA{" "}
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "40px",
                lineHeight: "46.88px",
                color: "var(--orange1)",
              }}
            >
              BLACK SKULL
            </Typography>
          </Typography>
        </Box>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            pb: 2,
            width: "95.5vw",
            ml: 8,
            mr: 8,
            zIndex: 0,
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons={true}
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
                      mr: "32px",
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
                      ml: "20px",
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
            {members.map((member, index) => {
              return (
                <Box
                  key={member.name + index}
                  component={"img"}
                  src={member.image}
                  sx={{
                    ml: index > 0 ? "10px" : "0px",
                    mr: index > members.length - 1 ? "0px" : "10px",
                  }}
                />
              );
            })}
          </Tabs>
        </ListItem>
      </Box>
      <Button
        variant="contained"
        sx={{
          mt: "30px",
          mb: "64px",
          p: "14px 24px",
          gap: "10px",
          bgcolor: "var(--orange1)",
          color: "var(--dark1)",
          fontFamily: "Barlow, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "20px",
          borderRadius: "4px",
          ":hover": { bgcolor: "var(--orange2)" },
        }}
      >
        Ver Todos
      </Button>
    </Box>
  );
}

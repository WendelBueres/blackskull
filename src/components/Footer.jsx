import { ReactComponent as Logo } from "../assets/Logo footer.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as TikTok } from "../assets/tiktok.svg";
import { ReactComponent as Wicomm } from "../assets/Wicomm.svg";
import { ReactComponent as VtexLogo } from "../assets/vtex white.svg";
import { ReactComponent as WaysPayment } from "../assets/Payment.svg";
import { ReactComponent as Vtex } from "../assets/vtex.svg";
import { ReactComponent as EBit } from "../assets/ebit.svg";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mb: "-110px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "474px",
          width: "100%",
          bgcolor: "var(--black1)",
          m: 0,
          mt: "176px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            pt: "40px",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box>
            {/* Colunas de links */}
            <Box
              sx={{
                display: "flex",
                pl: "40px",
                width: "1100px",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Box
                sx={{
                  width: "245px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "-16px",
                }}
              >
                <Logo />
                <Typography
                  sx={{ mt: "32px", color: "var(--white)", userSelect: "none" }}
                >
                  Nos siga:
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton key={"facebook"}>
                    <Facebook />
                  </IconButton>
                  <IconButton key={"Instagram"}>
                    <Instagram />
                  </IconButton>
                  <IconButton key={"Youtube"}>
                    <Youtube />
                  </IconButton>
                  <IconButton key={"Twitter"}>
                    <Twitter />
                  </IconButton>
                  <IconButton key={"TikTok"}>
                    <TikTok />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "141px",
                }}
              >
                <Typography
                  sx={{
                    color: "var(--white)",
                    fontFamily: "Barlow, sans-serif",
                    fontSize: "16px",
                    lineHeight: "19.2px",
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  BLACKSKULL USA
                </Typography>
                <Box sx={{ mt: "20px" }}>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Sobre Nós
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Black Skull é confiável?
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Atletas Black Skull
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Nosso Blog
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Seja um Revendedor
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Entre em Contato
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "160px" }}>
                <Typography
                  sx={{
                    color: "var(--white)",
                    fontFamily: "Barlow, sans-serif",
                    fontSize: "16px",
                    lineHeight: "19.2px",
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  INSTITUCIONAL
                </Typography>
                <Box sx={{ mt: "20px" }}>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Trocas e Devoluções
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Política de Entregas
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Política de Privacidade
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Política de Cancelamentos
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "156px" }}>
                <Typography
                  sx={{
                    color: "var(--white)",
                    fontFamily: "Barlow, sans-serif",
                    fontSize: "16px",
                    lineHeight: "19.2px",
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  AFILIADOS
                </Typography>
                <Box sx={{ mt: "20px" }}>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Programa de Afiliados
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Desconto para Militares
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Benefícios para Profissionais da Saúde
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",

                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Benefícios para Profs. de Educação Física
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--gray1)",
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      fontWeight: 400,
                      mb: "14px",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Assinaturas
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Box de informações */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "38px",
              }}
            >
              {/* Box com Formas de Pagamento */}
              <Box sx={{ pr: "24px" }}>
                <Typography
                  sx={{
                    color: "var(--white)",
                    mb: "24px",
                    userSelect: "none",
                    userSelect: "none",
                  }}
                >
                  FORMAS DE PAGAMENTO
                </Typography>
                <WaysPayment />
              </Box>

              {/* Box com certificações */}
              <Box sx={{ pl: "24px" }}>
                <Typography
                  sx={{
                    color: "var(--white)",
                    mb: "24px",
                    userSelect: "none",
                  }}
                >
                  SEGURANÇA
                </Typography>
                <Box
                  sx={{
                    width: "128px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Vtex />
                  <EBit />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Newsletter */}
          <Box
            sx={{
              pr: "40px",
              pl: "40px",
              pt: "40px",
              mt: "-40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              borderLeft: "1px solid var(--dark3)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "32px",
                lineHeight: "37.5px",
                whiteSpace: "pre",
                color: "var(--white)",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              FIQUE POR{" "}
              <Typography
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "32px",
                  lineHeight: "37.5px",
                  whiteSpace: "pre",
                  textAlign: "center",
                  color: "var(--orange1)",
                }}
              >
                DENTRO
              </Typography>
            </Typography>
            <Typography
              sx={{
                width: "265px",
                color: "var(--gray1)",
                textAlign: "center",
                fontFamily: "Barlow, sans-serif",
                fontSize: "14px",
                lineHeight: "16.8px",
                fontWeight: 400,
                mt: "16px",
                mb: "32px",
                userSelect: "none",
              }}
            >
              Inscreva-se e seja o primeiro a saber sobre as novidades,
              promoções e muito mais!
            </Typography>
            <InputBase
              sx={{
                width: "266px",
                height: "56px",
                borderRadius: "4px",
                p: "13px 16px",
                gap: "10px",
                color: "var(--gray1)",
                backgroundColor: "var(--dark1)",
                border: "1px solid var(--dark3)",
                mb: "16px",
              }}
              placeholder="Digite seu nome"
            />
            <InputBase
              sx={{
                width: "266px",
                height: "56px",
                borderRadius: "4px",
                p: "13px 16px",
                gap: "10px",
                color: "var(--gray1)",
                backgroundColor: "var(--dark1)",
                border: "1px solid var(--dark3)",
              }}
              placeholder="Digite seu e-mail"
            />
            <Button
              disableRipple
              variant="text"
              sx={{
                color: "var(--black1)",
                bgcolor: "var(--orange1)",
                borderRadius: "4px",
                p: "10px 42px",
                fontFamily: "Barlow, sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 700,
                mt: "24px",
                mb: "86px",
                ":hover": {
                  bgcolor: "var(--orange2)",
                },
              }}
            >
              ENVIAR
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Rodapé */}
      <Box
        sx={{
          borderTop: "1px solid var(--dark3)",
          height: "88px",
          bgcolor: "var(--black1)",
          pl: "56px",
          pr: "57px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--white)",
            fontFamily: "Barlow, sans-serif",
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: 400,
            userSelect: "none",
          }}
        >
          Black Skull 2022. Todos os direitos reservados.
        </Typography>
        <Box
          sx={{
            width: "202px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Wicomm />
          <VtexLogo />
        </Box>
      </Box>
    </Box>
  );
}

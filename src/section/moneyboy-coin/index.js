import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import { Subtitle, HeadChip, ArrowLinkButton } from "components";

function MoneyboyCoin() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="moneyboy-coin"
      sx={{
        position: "relative",
        background: "#7effa7",
        overflow: "hidden",
        paddingY: "233px",
        [theme.breakpoints.down("xl")]: {
          paddingY: "180px",
        },
        [theme.breakpoints.down("lg")]: {
          paddingY: "150px",
        },
        [theme.breakpoints.down("md")]: {
          padding: "80px 0 84%",
        },
      }}
    >
      <Container
        fixed
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        sx={{ position: "relative", zIndex: 100 }}
      >
        <Grid container sx={{ alignItems: "center" }}>
          <Grid
            item
            md={6}
            sx={{ [theme.breakpoints.down("md")]: { order: 2 } }}
          ></Grid>
          <Grid
            item
            md={6}
            sx={{
              [theme.breakpoints.down("md")]: { order: 1 },
              [theme.breakpoints.up("lg")]: { paddingLeft: "55px" },
            }}
          >
            <Box>
              <HeadChip
                label="COIN"
                variant="outlined"
                sx={{ borderColor: "#24963d", color: "#24963d" }}
              />
              <Subtitle
                sx={{
                  color: "#060608",
                  opacity: 0.8,
                }}
              >
                MoneyBoy Coin
              </Subtitle>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Medium",
                  fontSize: "20px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Powering Transactions on MoneyPlex.{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Regular",
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 0.6)",
                  lineHeight: "28px",
                  marginTop: "12px",
                }}
              >
                Use MoneyBoy Coin to power your wallet on{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("sm")]: { display: "block" } }}
                />
                MoneyPlex and buy goods on the $MBC Store. Earn{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("sm")]: { display: "block" } }}
                />
                $MBC by Staking.
              </Typography>
              <ArrowLinkButton
                href="#"
                target="_blank"
                endIcon={<ArrowForwardIcon />}
                mainColor={"#060608"}
                sx={{ marginTop: "20px" }}
              >
                Read Tokenomics
              </ArrowLinkButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: "url(/images/moneyboy-coin.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPosition: "left center",
          [theme.breakpoints.down("lg")]: {
            backgroundSize: "auto 80%",
          },
          [theme.breakpoints.down("md")]: {
            backgroundImage: "url(/images/moneyboy-coin-sp.png)",
            backgroundPosition: "bottom center",
            backgroundSize: "80% auto",
          },
        }}
      ></Box>
    </Box>
  );
}

export default MoneyboyCoin;

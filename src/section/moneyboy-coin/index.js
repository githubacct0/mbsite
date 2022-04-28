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
        background: "#7effa7",
        backgroundImage: "url(/images/moneyboy-coin.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "left center",
        paddingY: "233px",
        [theme.breakpoints.down("xl")]: {
          paddingY: "180px",
        },
        [theme.breakpoints.down("lg")]: {
          backgroundSize: "auto 80%",
          paddingY: "150px",
        },
        [theme.breakpoints.down("md")]: {
          backgroundImage: "url(/images/moneyboy-coin-sp.webp)",
          backgroundPosition: "right calc(40% + 180px)",
          padding: "120px 0 230px",
          backgroundSize: "55% auto",
        },
        [theme.breakpoints.down("sm")]: {
          backgroundPosition: "right calc(70% + 115px)",
          padding: "120px 0 180px",
          backgroundSize: "60% auto",
        },
      }}
    >
      <Container fixed>
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
                ></Box>
                MoneyPlex and buy goods on the $MBC Store. Earn{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("sm")]: { display: "block" } }}
                ></Box>
                $MBC by Staking.
              </Typography>
              <ArrowLinkButton
                endIcon={<ArrowForwardIcon sx={{ color: "#3bcd5b" }} />}
                mainColor={"#060608"}
                sx={{ marginTop: "20px" }}
              >
                Read Tokenomics
              </ArrowLinkButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MoneyboyCoin;

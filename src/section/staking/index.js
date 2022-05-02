import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import { HeadChip, Title, ArrowLinkButton } from "components";

function Staking() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        background: "#0a216b",
        paddingTop: "18%",
      }}
    >
      <Box
        id="staking"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "821px",
          [theme.breakpoints.down("xl")]: { height: "700px" },
          [theme.breakpoints.down("lg")]: { height: "500px" },
          [theme.breakpoints.down("md")]: {
            height: "fit-content",
            paddingBottom: "360px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingBottom: "240px",
          },
        }}
      >
        <Container fixed sx={{ position: "relative", zIndex: 200 }}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={5}
              sx={{ paddingBottom: "130px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <HeadChip
                label="FEATURE"
                variant="outlined"
                sx={{ borderColor: "#c1e7ff", color: "#c1e7ff" }}
              />
              <Title sx={{ color: "#ffffff", marginTop: "5px" }}>Staking</Title>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Regular",
                  fontSize: "20px",
                  lineHeight: 1.4,
                  color: "#ffffff",
                  opacity: 0.6,
                  marginTop: "13px",
                }}
              >
                Only way to earn $MBC. Stake your NFTs and{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("lg")]: { display: "block" } }}
                />
                earn passive income.
              </Typography>
              <ArrowLinkButton
                href="https://www.moneyplex-stake.io/"
                target="_blank"
                endIcon={<ArrowForwardIcon />}
                mainColor={"#ffffff"}
                sx={{ marginTop: "24px" }}
              >
                Go to Staking
              </ArrowLinkButton>
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
            backgroundImage: "url(/images/staking.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% bottom",
            backgroundSize: "auto 100%",
            [theme.breakpoints.down("md")]: {
              backgroundPosition: "center bottom",
              backgroundSize: "400px auto",
            },
            [theme.breakpoints.down("sm")]: {
              backgroundSize: "300px auto",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Staking;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Title, Subtitle, HeadChip } from "components";

const MagicEdenButton = ({ sx, href }) => (
  <Button
    href={href}
    endIcon={<img src="/images/magiceden.svg" alt="Buy on MagicEden" />}
    variant="contained"
    target="_blank"
    sx={{
      fontFamily: "PlusJakartaSans-SemiBold",
      fontSize: "16px",
      textTransform: "none",
      height: "42px",
      backgroundColor: "rgba(35, 35, 35, 0.95)",
      "&:hover": {
        backgroundColor: "rgba(55, 55, 55, 0.8)",
      },
      ...sx,
    }}
  >
    Buy on MagicEden&nbsp;&nbsp;&nbsp;
  </Button>
);

function Collections() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        background: "#060608",
        color: "#ffffff",
        padding: "220px 0 215px",
        [theme.breakpoints.down("md")]: {
          padding: "150px 0 150px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "100px 0 100px",
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <HeadChip
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-once="true"
          label="NFT COLLECTIONS"
          variant="outlined"
          sx={{ borderColor: "#44d3ff", color: "#44d3ff" }}
        />
        <Title
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-easing="ease-out-quad"
          sx={{
            marginTop: "32px",
            backgroundImage: "linear-gradient(104deg, #00d0ff 2%, #c933ff 99%)",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.13,
            letterSpacing: "0.39px",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Three Collections,
          <br />
          One Family
        </Title>
        <IconButton
          href="#collection-moneyboys"
          sx={{
            marginTop: "60px",
            [theme.breakpoints.down("sm")]: { marginTop: "40px" },
          }}
        >
          <img src="/images/arrow-down.svg" alt="Scroll down" />
        </IconButton>
      </Box>
      <Box
        id="collection-moneyboys"
        sx={{
          marginTop: "100px",
          position: "relative",
          [theme.breakpoints.down("sm")]: { marginTop: "60px" },
        }}
      >
        <Container
          className="container-fluid"
          disableGutters="true"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ position: "relative", zIndex: 100 }}
        >
          <Grid
            container
            sx={{
              alignItems: "center",
              height: 700,
              [theme.breakpoints.down("xl")]: { height: 600 },
              [theme.breakpoints.down("lg")]: { height: 470 },
              [theme.breakpoints.down("md")]: {
                height: "fit-content",
                paddingBottom: "30px",
              },
            }}
          >
            <Grid item md={6}>
              <Box 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-offset="0" 
              sx={{ 
                maxWidth: '800px', 
                [theme.breakpoints.down("md")]: { marginBottom: "40px" }
              }}>
                <img src="/images/moneyboys.webp" alt="MoneyBoys" className="fluid" />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                paddingLeft: "94px",
                [theme.breakpoints.down("xl")]: { paddingLeft: "80px" },
                [theme.breakpoints.down("lg")]: { paddingLeft: "70px" },
                [theme.breakpoints.down("md")]: { padding: "0 30px" },
              }}
            >
              <div data-scroll-speed="4">
              <HeadChip
                label="OG COLLECTION"
                variant="outlined"
                sx={{
                  color: "#ffde7f",
                  borderColor: "#fff87f",
                  backgroundImage:
                    "linear-gradient(93deg, rgba(255, 213, 42, 0.5) 0%, rgba(255, 247, 137, 0.26) 54%, rgba(255, 208, 30, 0.28) 100%)",
                  boxShadow: "0 1px 2px 0 rgba(11, 11, 20, 0.1)",
                }}
              />
              <Subtitle sx={{ marginTop: "15px" }}>MoneyBoys</Subtitle>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Regular",
                  fontSize: "20px",
                  lineHeight: 1.4,
                  color: "rgba(255, 255, 255, 0.8)",
                  marginTop: "10px",
                }}
              >
                A global community of builders and bag{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("lg")]: { display: "block" } }}
                />
                makers on Solana 🤝
              </Typography>
              <MagicEdenButton
                href="https://www.magiceden.io/marketplace/solana_money_boys"
                sx={{
                  marginTop: "42px",
                }}
              />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        id="collection-moneygirls"
        sx={{
          marginTop: "84px",
          position: "relative",
        }}
      >
        <Container
          className="container-fluid"
          disableGutters="true"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ position: "relative", zIndex: 100 }}
          >
          <Grid
            container
            sx={{
              alignItems: "center",
              height: 841,
              [theme.breakpoints.down("xl")]: {
                height: "calc(600px * 841 / 700)",
              },
              [theme.breakpoints.down("lg")]: {
                height: "calc(470px * 841 / 700)",
              },
              [theme.breakpoints.down("md")]: {
                height: "fit-content",
                paddingBottom: "50px",
                flexDirection: "column-reverse",
                alignItems: "baseline",
              },
            }}
          >
            <Grid item md={6} sx={{
              [theme.breakpoints.up("md")]: { paddingLeft: "10%" },
              [theme.breakpoints.down("md")]: { padding: "0 30px" },
            }}>
              <HeadChip
                label="NFT"
                variant="outlined"
                sx={{
                  color: "#ff7bbf",
                  backgroundColor: "rgba(255, 123, 191, 0.2)",
                  borderColor: "#ff7bbf",
                }}
              />
              <Subtitle sx={{ marginTop: "15px" }}>MoneyGirls</Subtitle>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Regular",
                  fontSize: "20px",
                  lineHeight: 1.4,
                  color: "rgba(255, 255, 255, 0.8)",
                  marginTop: "10px",
                }}
              >
                A global community of creators, bread-makers,{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("lg")]: { display: "block" } }}
                />
                and builders.
              </Typography>
              <MagicEdenButton
                href="https://www.magiceden.io/marketplace/solana_money_girls"
                sx={{
                  marginTop: "42px",
                }}
              />
            </Grid>
            <Grid item md={6}>

              <Box 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-offset="0" 
                sx={{ 
                  maxWidth: "800px",
                  width: "100%", 
                  float: "right",
                  [theme.breakpoints.down("md")]: {  marginBottom: "40px", float: "left" }
                }}>
                  <img src="/images/moneygirls.webp" alt="MoneyBoys" className="fluid" />
                </Box>

            </Grid>
          </Grid>
        </Container>

      </Box>
      <Box
        id="collection-diamondboys"
        sx={{
          marginTop: "147px",
          position: "relative",
          [theme.breakpoints.down("md")]: {
            marginTop: "100px",
          },
        }}
      >
        <Container
          className="container-fluid"
          disableGutters="true"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ position: "relative", zIndex: 100 }}
        >
          <Grid
            container
            sx={{
              alignItems: "center",
              height: 700,
              [theme.breakpoints.down("xl")]: { height: 600 },
              [theme.breakpoints.down("lg")]: { height: 470 },
              [theme.breakpoints.down("md")]: {
                height: "fit-content",
                paddingBottom: "350px",
              },
              [theme.breakpoints.down("sm")]: { paddingBottom: "300px" },
            }}
          >
            <Grid item md={6}>
              <Box 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-offset="0" 
              sx={{ 
                maxWidth: '800px', 
                [theme.breakpoints.down("md")]: { maxWidth: "90%", marginBottom: "40px" }
              }}>
                <img src="/images/diamondboys.webp" alt="DiamondBoys" className="fluid" />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                paddingLeft: "94px",
                [theme.breakpoints.down("xl")]: { paddingLeft: "80px" },
                [theme.breakpoints.down("lg")]: { paddingLeft: "70px" },
                [theme.breakpoints.down("md")]: { padding: "0 30px" },
              }}
            >
              <HeadChip
                label="NFT"
                variant="outlined"
                sx={{
                  color: "#7bbfff",
                  borderColor: "#7bb4ff",
                  backgroundColor: "rgba(123, 180, 255, 0.2)",
                  boxShadow: "0 1px 2px 0 rgba(11, 11, 20, 0.1)",
                }}
              />
              <Subtitle sx={{ marginTop: "15px" }}>Diamond Boys</Subtitle>
              <Typography
                sx={{
                  fontFamily: "PlusJakartaSans-Regular",
                  fontSize: "20px",
                  lineHeight: 1.4,
                  color: "rgba(255, 255, 255, 0.8)",
                  marginTop: "10px",
                }}
              >
                A moneyboys best friend, featuring exclusive utility{" "}
                <Box
                  component="span"
                  sx={{ [theme.breakpoints.up("lg")]: { display: "block" } }}
                />
                and $MBC rewards.
              </Typography>
              <MagicEdenButton
                href="https://www.magiceden.io/marketplace/solana_diamond_boys"
                sx={{
                  marginTop: "42px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Collections;

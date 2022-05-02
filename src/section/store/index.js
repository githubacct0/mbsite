import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import { HeadChip, Title, ArrowLinkButton } from "components";

function Store() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="store"
      sx={{ background: "#ffd6e2", textAlign: "center", padding: "81.5px 0 0" }}
    >
      <Container fixed>
        <Box data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <HeadChip
            label="PRODUCT"
            sx={{ backgroundColor: "#dc5e83", color: "#ffffff" }}
          />
          <Title sx={{ color: "#060608", marginTop: "13px" }}>Store</Title>
          <Typography
            sx={{
              fontFamily: "PlusJakartaSans-Regular",
              fontSize: "20px",
              lineHeight: 1.4,
              color: "#060608",
              opacity: 0.6,
              marginTop: "13px",
            }}
          >
            Use your $MBC to win raffles, bid on auctions{" "}
            <Box
              component="span"
              sx={{ [theme.breakpoints.up("sm")]: { display: "block" } }}
            />
            or buy and sell NFTs in one place.
          </Typography>

          <ArrowLinkButton
            href="https://moneyplex.io/store"
            target="_blank"
            endIcon={<ArrowForwardIcon />}
            mainColor={"#060608"}
            sx={{ marginTop: "24px" }}
          >
            Checkout the Store
          </ArrowLinkButton>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          sx={{
            marginTop: "50px",
            marginBottom: "-18%",
            position: "relative",
            zIndex: "300",
            img: { width: "100%" },
          }}
        >
          <img src="images/store.webp" alt="Store" />
        </Box>
      </Container>
    </Box>
  );
}

export default Store;
